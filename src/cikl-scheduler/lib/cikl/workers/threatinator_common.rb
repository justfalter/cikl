require 'threatinator/plugin_loader'
require 'threatinator/actions/run'
require 'threatinator/feed_registry'
require 'threatinator/config'

module Cikl
  module Workers
    module ThreatinatorCommon
      def self.plugin_loader
        if @plugin_loader
          return @plugin_loader
        end
        @plugin_loader = Threatinator::PluginLoader.new
        @plugin_loader.load_all_plugins
        return @plugin_loader
      end

      def self.run_action_config_class
        if @run_action_config_class
          return @run_action_config_class
        end
        @run_action_config_class = Threatinator::Actions::Run::Config.generate(self.plugin_loader)
        return @run_action_config_class
      end

      def self.feed_registry
        if @feed_registry
          return @feed_registry
        end
        @feed_registry = Threatinator::FeedRegistry.build(
          Threatinator::Config::FeedSearch.new({})
        )
        return @feed_registry
      end
    end
  end
end

