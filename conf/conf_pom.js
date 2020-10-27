// An example configuration file.
exports.config = {
  directConnect: true,

  baseUrl: 'http://juliemr.github.io/protractor-demo/',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'firefox'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator_pom.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true  // Use colors in the command line report.
  }
};
