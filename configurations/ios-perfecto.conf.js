const path = require('path');
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE2MjkyNDMzOTEsImp0aSI6ImM4ZjAwNTZmLTBiNjktNDhlNS1hMjQwLTc0Mzc0MzZjNjRhOCIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjExZTAwOTdkLTBhZDAtNDRiNi1hMzFhLWQxODlkN2Q1NGQ2MyIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiNzJkM2MyZGYtNWZjZi00YjMwLTg4ZmYtODkwNzBiMTc0MjBhIiwic2Vzc2lvbl9zdGF0ZSI6IjNlMmMzN2Y3LTkyZDctNDRjNi05NWExLWNmYmFiYzBjMDZjNCIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ.x1tSvm0KXsD0YD6aNYxZV3jWcYpVFS5mHpNwVyK_C2k';
const host = 'trial';

const iosCaps = {
  securityToken: securityToken,
  automationName: 'XCUITest',
  autoLaunch: true,
  app: 'PRIVATE:1629243373819_iOS.ipa',
  autoInstrument: true,
  browserName: '',
  takesScreenshot: false,
  screenshotOnError: true,
  openDeviceTimeout: 5,
  waitForAvailableLicense: true,
  user: 'thomastupper92618@gmail.com',
  platformName: 'ios',
  platformVersion: '14.2',
  location: 'NA-US-BOS',
  resolution: '1125x2436',
  manufacturer: 'Apple',
  model: 'iPhone-11 Pro',
  iOSResign: true
};

const appiumIosConfig = {
  securityToken: securityToken,
  protocol: 'http',
  hostname: host + '.perfectomobile.com',
  path: '/nexperience/perfectomobile/wd/hub',
  port: 80,
  sync: true,
  bail: 0,
  desiredCapabilities: iosCaps,
  app: 'PRIVATE:1629243373819_iOS.ipa',
  platformName: 'ios',
  browserName: '',
  automationName: 'XCUITest',
  iOSResign: true
}

function spinUpForIos() {
  exports.config = {
    output: '../output',
    maxInstances: 1,
    helpers: {
      Appium: appiumIosConfig,
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
    tests: '../ios/*_test.js',
    name: 'appium-codecept-universal-POC'
  }
}

spinUpForIos();