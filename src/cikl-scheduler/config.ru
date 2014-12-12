require 'cikl/scheduler/env'
require 'sidekiq/web'
require 'sidekiq-status/web'
run Sidekiq::Web
