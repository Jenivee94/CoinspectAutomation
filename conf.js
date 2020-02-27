// conf.js
exports.config = {
    framework: 'jasmine',
    specs: [
      // 'spec.js',
    // 'properties_spec.js',
    //  'usergroup_spec.js',
     'users_spec.js',
      'checklist_spec.js'

  ],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 250000
  },
  useAllAngular2AppRoots: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
   // directConnect: true,
    //chromeOnly: true,
    capabilities: {
      'browserName': 'chrome',
	    'shardTestFiles': true,
      'maxInstances': 1
    },
  };
<<<<<<< HEAD
QATestingRepository
=======
 QATestingRepository
>>>>>>> newconf
