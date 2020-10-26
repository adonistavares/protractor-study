// An example configuration file.
exports.config = {
  directConnect: true,
  // Put directConnect: false and uncomment next line to run with Selenium Server
  //seleniumAddress: 'http://localhost:4444/wd/hub',

/*   // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  }, */

  multiCapabilities: [
    /* {
      browserName: 'chrome'
    } ,*/
    {
      browserName: 'firefox'
    }
  ],

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  //suites: {
  //  homepage: 'tests/e2e/homepage/**/*Spec.js',
  //  search: ['tests/e2e/contact_search/**/*Spec.js',
  //    'tests/e2e/venue_search/**/*Spec.js']
  //},

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true  // Use colors in the command line report.
  }
};
