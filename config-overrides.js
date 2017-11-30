var path = require('path');

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.output.filename = 'static/js/bundle.js';
  return config;
}