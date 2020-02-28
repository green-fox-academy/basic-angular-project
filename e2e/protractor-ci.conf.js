const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--window-size=800x600'
    ]
  }
};

exports.config = config;
