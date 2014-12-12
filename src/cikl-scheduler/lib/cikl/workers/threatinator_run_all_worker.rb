require 'sidekiq'
require 'multi_json'
require 'cikl/workers/threatinator_worker'
require 'cikl/workers/threatinator_common'

module Cikl
  module Workers
    class ThreatinatorRunAllWorker
      include Sidekiq::Worker
      sidekiq_options retry: false, # Don't retry... generates too much work.
                      backtrace: true

      def perform()
        ThreatinatorCommon.feed_registry.each do |feed|
          Cikl::Workers::ThreatinatorWorker.perform_async(feed.provider, feed.name)
        end
      end
    end
  end
end


