const path = require('path');
const { config } = require('./web.shared.conf.js');

config.specs = ['./tests/web-admin/specs/*.spec.js'];
config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      prefs: {
        'download.default_directory': path.resolve('.')
      }
    }
  }
];

config.baseUrl = 'https://admin.dev.com/';
exports.config = { ...config };
