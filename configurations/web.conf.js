exports.config = {
  output: '../output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      windowSize: '1200x600',
      browser: 'webkit'
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    },
    /*ResembleHelper : {
      require: 'codeceptjs-resemblehelper',
      baseFolder: '../screenshots/base/',
      diffFolder: '../screenshots/diff/',
      prepareBaseImage: false
    }*/
  },
  include: {
    I: '../steps_file.js'
  },
  mocha: {
    reporterOptions: {
      'codeceptjs-cli-reporter': {
        stdout: '-',
        options: {
          verbose: true,
          steps: true
        }
      },
      mochawesome: {
        stdout: '../output/console.log',
        options: {
          reportDir: '../output',
          reportFilename: 'report'
        }
      },
      'mocha-junit-reporter': {
        stdout: '../output/console.log',
        options: {
          mochaFile: '../output/result.xml',
          attachments: true
        }
      }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: '../web/features/*.feature',
    steps: ['../web/step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      enableScreenshotDiffPlugin: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: '../web/*_test.js',
  name: 'codeceptjs-web-POC'
}