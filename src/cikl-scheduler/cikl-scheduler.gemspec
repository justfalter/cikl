version = File.read(File.expand_path('../../VERSION', __FILE__)).strip

Gem::Specification.new do |s|
  s.platform    = Gem::Platform::RUBY
  s.name        = 'cikl-scheduler'
  s.version     = version
  s.summary     = "Cikl's scheduler"

  s.license = 'LGPLv3'

  s.author   = 'Michael Ryan'
  s.email    = 'falter@gmail.com'
  s.homepage = 'http://github.com/cikl'
  s.bindir   = 'bin'

  s.files = Dir['Rakefile', 'config.ru', 'worker_env.rb', 'lib/**/*', 'bin/**/*']

  s.add_dependency 'cikl-event',                version
  s.add_dependency 'threatinator-output-cikl',  version
  s.add_dependency 'threatinator',              '=0.2.1'
  s.add_dependency 'rack',                      '>=0'
  s.add_dependency 'sinatra',                   '~> 1.4.0'
  s.add_dependency 'clockwork',                  '>=1.1.0'
  s.add_dependency 'sidekiq',                   '~> 3.3.0'
  s.add_dependency 'sidekiq-status',            '~> 0.5.1'
  s.add_dependency 'sidekiq-retries',            '~> 0.3.0'
  s.add_dependency 'sidekiq-unique-jobs',       '~> 3.0.10'

  s.add_dependency 'bundler',         '>= 1.3.0', '< 2.0'
end
