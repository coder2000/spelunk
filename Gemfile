source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.0.2"

gem "rails", github: "rails/rails", branch: "main"

# Use postgresql as the database for Active Record
gem "pg", "~> 1.1"
# Use Puma as the app server
gem "puma", "~> 5.0"
# Use SCSS for stylesheets
gem "sass-rails", ">= 6"
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem "jbuilder", "~> 2.7"
# Use Redis adapter to run Action Cable in production
gem "redis", "~> 4.0"
# Use Active Model has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem "ahoy_matey"
gem "cssbundling-rails", github: "rails/cssbundling-rails"
gem "devise"
gem "friendly_id"
gem "hotwire-rails"
gem "jsbundling-rails", github: "rails/jsbundling-rails"
gem "name_of_person"
gem "pagy"
gem "pg_query"
gem "pretender"
gem "pundit"
gem "serviceworker-rails"
gem "strong_migrations"
gem "sidekiq"
gem "validates_timeliness", "~> 6.0.0.alpha1"
gem "view_component", require: "view_component/engine"
gem "whenever", require: false

# Reduces boot times through caching; required in config/boot.rb
gem "bootsnap", ">= 1.4.4", require: false

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "prosopite"
end

group :development do
  gem "annotate", github: "vasfed/annotate_models", branch: "rails6_warning"
  gem "better_errors"
  gem "binding_of_caller"

  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem "web-console", github: "rails/web-console"

  gem "standard"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
