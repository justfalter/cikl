module Cikl
  module Workers
    class ThreatinatorObserver
      attr_reader :missed, :filtered, :parsed, :errors
      def initialize(report_status_proc)
        @report_status_proc = report_status_proc
        @missed = @filtered = @parsed = @errors = 0
        @records = 0
      end

      def total
        @missed + @filtered + @parsed + @errors
      end

      def report_status(offset, message)
        @report_status_proc.call(offset, message)
      end

      # Handles FeedRunner observations
      def update(message, *args)
        case message
        when :record_missed
          @missed += 1
        when :record_filtered
          @filtered += 1
        when :record_parsed
          @parsed += 1
        when :record_error
          @errors += 1
        when :end_parse_record
          @records += 1
          if @records == 1 || (@records % 100) == 0
            report_status 75, "parsing (#{@records} so far)"
          end
        when :start
          report_status 10, "started"
        when :start_fetch
          report_status 20, "fetching..."
        when :end_fetch
          report_status 30, "fetch complete"
        when :start_decode
          report_status 40, "decoding..."
        when :end_decode
          report_status 50, "decode complete"
        when :end
          report_status 100, "done"
        end
      end

      def missed?; @missed > 0; end
      def parsed?; @parsed > 0; end
      def filtered?; @filtered > 0; end
      def errors?; @errors > 0; end

    end
  end
end

