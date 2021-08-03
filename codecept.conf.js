exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/thomastupper/appium-codecept-POC/sample_apps/Android.apk',
      platform: 'Android',
      desiredCapabilities: {
        deviceName: 'Pixel 5 API 28',
        platformName: 'Android',
        automationName: 'UiAutomator2'
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js'
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
        stdout: './output/console.log',
        options: {
          reportDir: './output',
          reportFilename: 'report'
        }
      },
      'mocha-junit-reporter': {
        stdout: './output/console.log',
        options: {
          mochaFile: './output/result.xml',
          attachments: true
        }
      }
    }
  },
  bootstrap: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    }
  },
  tests: './*_test.js',
  name: 'appium-codecept-Android-POC'
}