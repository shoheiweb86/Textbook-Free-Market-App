require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module App
  class Application < Rails::Application
  
    # Set timezone
    config.time_zone = "Tokyo"
    config.active_record.default_timezone = :local

    # Set locale
    config.i18n.default_locale = :ja
    config.i18n.available_locales = [:en, :ja]
  end
end