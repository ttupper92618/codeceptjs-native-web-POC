const path = require('path');

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator1',
  deviceName: 'Android Emulator',
  avd: 'Pixel_5_API_28',
  app: path.resolve('./sample_apps/Android.apk'),
  appActivity: 'com.swaglabsmobileapp.MainActivity'
};

const appiumAndroidConfig = {
  platform: 'Android',
  device: 'emulator',
  desiredCapabilities: androidCaps
}

function spinUpForAndroid() {
  exports.config = {
    output: '../output',
    helpers: {
      Appium: appiumAndroidConfig,
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
    tests: '../android/*_test.js',
    name: 'appium-codecept-Android-POC'
  }
}

spinUpForAndroid();