require 'sidekiq'
require 'sidekiq-status'

if ENV['SCHEDULER_REDIS_URL'].nil?
  raise "Missing required environment variable: 'SCHEDULER_REDIS_URL'"
end

Sidekiq.configure_client do |config|
  config.redis = { 
    :size => 1,
    :url => ENV['SCHEDULER_REDIS_URL'],
    #:namespace => 'x'
  }

  config.client_middleware do |chain|
    chain.add Sidekiq::Status::ClientMiddleware
  end
end

Sidekiq.configure_server do |config|
  config.redis = { 
    :url => ENV['SCHEDULER_REDIS_URL']
    #:namespace => 'x' 
  }

  config.server_middleware do |chain|
    chain.add Sidekiq::Status::ServerMiddleware
  end

  config.client_middleware do |chain|
    chain.add Sidekiq::Status::ClientMiddleware
  end
end
