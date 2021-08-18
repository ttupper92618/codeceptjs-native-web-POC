const path = require('path');

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator1',
  appActivity: 'com.swaglabsmobileapp.MainActivity',
  app: "bs://da87a9be5b622b3869c3a3e6bf37edcc380ac89f",
  host: "hub-cloud.browserstack.com",
  port: 4444,
  platform: "Android",
  user: "thomastupper_tDGUVg",
  key: "XCEzNqFM37RTesApsyBs",
  device: "Google Pixel 3",
};

const appiumAndroidConfig = {
  platform: 'Android',
  // device: 'Google Pixel 3',
  desiredCapabilities: androidCaps
}

function spinUpForAndroid() {
  exports.config = {
    output: '../output',
    helpers: {
      Appium: {
        app: "bs://da87a9be5b622b3869c3a3e6bf37edcc380ac89f",
        host: "hub.browserstack.com/wd/hub",
        // port: 4444,
        platform: "Android",
        user: "thomastupper_tDGUVg",
        key: "XCEzNqFM37RTesApsyBs",
        device: "Samsung Galaxy S20"
      },
      Mochawesome: {
        uniqueScreenshotNames: true
      },
      ResembleHelper : {
        require: 'codeceptjs-resemblehelper',
        baseFolder: '../screenshots/base/',
        diffFolder: '../screenshots/diff/',
        prepareBaseImage: true
      }
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
      features: '../universal-features/*.feature',
      steps: ['../universal-steps/steps.js']
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
    tests: '../android/*_test.js',
    name: 'appium-codecept-universal-POC'
  }
}

spinUpForAndroid();