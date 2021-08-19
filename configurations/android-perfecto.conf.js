const path = require('path');
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE2MjkzMjA5OTAsImp0aSI6ImYxM2JmMmE4LTYxNTktNDBiNy1iNTVlLTdlZDQyNzkwMTI1YyIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjE2MWUwNjYwLTNiMmEtNGJkMi05OWFkLWYyNWUxZTE3N2NjNSIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiMjU5YTY2MjQtYmZhMS00N2IzLWJlYjEtNmJmOWQ3YTAxNTI3Iiwic2Vzc2lvbl9zdGF0ZSI6IjM2ZThjNzQyLTNhMjgtNDM2Mi05NjhhLWQ3ODQzZDhjNjYxNiIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ.bl13b2axU6c5BO4xVcfN2rvnwPx45UIeW12wjd7DSSU';
const host = 'trial';

const androidCaps = {
  securityToken: securityToken,
  automationName: 'Appium',
  autoLaunch: true,
  platformName: 'Android',
  platformVersion: '10',
  manufacturer: 'Samsung',
  model: 'Galaxy S20',
  app: 'PRIVATE:Android.apk',
  autoInstrument: false,
  appActivity: 'com.swaglabsmobileapp.MainActivity',
  browserName: '',
  takesScreenshot: false,
  screenshotOnError: true,
  openDeviceTimeout: 5,
  waitForAvailableLicense: true,
  user: 'thomas.tupper@projekt202.com'
};

const appiumAndroidConfig = {
  securityToken: securityToken,
  protocol: 'http',
  hostname: host + '.perfectomobile.com',
  path: '/nexperience/perfectomobile/wd/hub',
  port: 80,
  sync: true,
  bail: 0,
  desiredCapabilities: androidCaps,
  app: 'PRIVATE:Android.apk',
  browserName: ''
}

function spinUpForAndroid() {
  exports.config = {
    output: '../output',
    maxInstances: 1,
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
      },
      CmdHelper: {
        require: '../node_modules/codeceptjs-cmdhelper',
        options: {
            'showOutput': true
        },
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