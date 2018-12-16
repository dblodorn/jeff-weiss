const config = require('./../src/config.json')

const HTML_OPTIONS = {
  title: config.meta_defaults.title,
  description: config.meta_defaults.description,
  bgcolor: config.meta_defaults.bgcolor,
  site_url: config.meta_defaults.site_url,
  keywords: config.meta_defaults.keywords,
  inject: true,
}

const PRODUCTION_ENDPOINT = config.wp_endpoint

module.exports = {
  HTML_OPTIONS,
  PRODUCTION_ENDPOINT
}