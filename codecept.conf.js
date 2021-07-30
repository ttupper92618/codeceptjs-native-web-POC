exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/thomastupper/appium-codecept-POC/sample_apps/DevCorps.app',
      platform: 'iOS',
      desiredCapabilities: {
        deviceName: 'iPhone 11',
        automationName: 'XCUITest'
      }
    },
    Mochawesome: {
      uniqueScreenshotNames: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
        "codeceptjs-cli-reporter": {
          stdout: '-',
          options: {
            verbose: true,
            steps: true,
          }
        },
        mochawesome: {
          stdout: './output/console.log',
          options: {
            reportDir: './output',
            reportFilename: 'report'
          }
        },
        "mocha-junit-reporter": {
          stdout: './output/console.log',
          options: {
            mochaFile: './output/result.xml',
            attachments: true //add screenshot for a failed test
          }
        }
    }
  },
  name: 'appium-codecept-POC',
  plugins: {
    allure: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}