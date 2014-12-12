require 'sidekiq'
require 'sidekiq-status'
require 'sidekiq/retries'
require 'cikl/workers/threatinator_common'
require 'cikl/workers/threatinator_observer'
require 'threatinator/plugins/output/cikl'

module Cikl
  module Workers
    class ThreatinatorWorker
      include Sidekiq::Worker
      include Sidekiq::Status::Worker

      sidekiq_options retry: 5,
                      backtrace: true

      def perform(provider, name)
        report_status_proc = lambda do |offset, message|
          at offset, "#{provider}:#{name} #{message}"
        end
        observer = ThreatinatorObserver.new(report_status_proc)

        config = ThreatinatorCommon.run_action_config_class.new({
          "feed_provider" => provider,
          "feed_name" => name,
          "observers" => [
            observer
          ],
          "output" => {
            "format" => "cikl",
            "cikl" => {
              "url" => ENV['CIKL_RABBITMQ_URL']
            }
          }
        })

        report_status_proc.call 0, "job begin"
        action = Threatinator::Actions::Run::Action.new(
          ThreatinatorCommon.feed_registry, config)

        begin
          action.exec
        rescue => e
          if observer.parsed != 0
            # We don't want to retry the job if we have already succesfully 
            # parsed at least some part of it. This avoids duplicate events.
            logger.error "#{provider}:#{name} encountered error while parsing. Not retrying job since we've parsed #{observer.parsed} records, already. #{e.class} #{e.message}"
            # 'retry', but set the max_retries to 0 so that we go straight to
            # the dead queue.
            raise Sidekiq::Retries::Retry.new(e,0)
          else
            raise e
          end
        end

        if observer.errors?
          logger.error "#{provider}:#{name} Failed to parse #{observer.errors} records!"
          raise Sidekiq::Retries::Retry.new(StandardError.new("Error while parsing feed. Failed to parse #{observer.errors} records!"),0)
        end

        if observer.missed?
          logger.error "#{provider}:#{name} Missed #{observer.missed} records!"
        end
        logger.info "#{provider}:#{name} parsed #{observer.parsed}, filtered #{observer.filtered}"
        report_status_proc.call 100, "done"
      end
    end
  end
end

