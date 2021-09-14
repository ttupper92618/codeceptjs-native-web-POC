const path = require('path');
const securityToken = 'eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJkMWEyMTBmZC1kN2UzLTRlYzgtYmU2YS0wNzNjMjNkMGNmM2QifQ.eyJpYXQiOjE2MzAwNzk0MzQsImp0aSI6ImQ3MDg2YjE1LWUwYTQtNDhlZC05MjU4LWM1ZGQ1MGI3ZGExMCIsImlzcyI6Imh0dHBzOi8vYXV0aDQucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL2ZpbmFub3ZhdGUtcGVyZmVjdG9tb2JpbGUtY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRoNC5wZXJmZWN0b21vYmlsZS5jb20vYXV0aC9yZWFsbXMvZmluYW5vdmF0ZS1wZXJmZWN0b21vYmlsZS1jb20iLCJzdWIiOiJmMmYyNWU2Zi1jNjI5LTRhOGUtODg0Ni00ZDhlYzQyNWI0MWQiLCJ0eXAiOiJPZmZsaW5lIiwiYXpwIjoib2ZmbGluZS10b2tlbi1nZW5lcmF0b3IiLCJub25jZSI6IjQ5NjZmYmM0LWE1ZmEtNDJlYi1hYjViLTA4ZmE0ZTgwMTRkMSIsInNlc3Npb25fc3RhdGUiOiJhZWZjZWEwOC02N2M2LTRlNWItODI3OC0zZmQ1MmNiOTA3ZDIiLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBvZmZsaW5lX2FjY2VzcyBwcm9maWxlIn0.zYUqQ0eeVGmmje6aidH2Q0CFhGwhuK2CjO2qLsOGBEc';
const host = 'finanovate';

const iosCaps = {
  securityToken: securityToken,
  automationName: 'XCUITest',
  autoLaunch: true,
  app: 'PRIVATE:iOS.ipa',
  autoInstrument: true,
  browserName: '',
  takesScreenshot: false,
  screenshotOnError: true,
  openDeviceTimeout: 5,
  waitForAvailableLicense: true,
  user: 'ttupper@finanovate.com',
  platformName: 'iOS',
  platformVersion: '14.0.1',
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
  app: 'PRIVATE:iOS.ipa',
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
      /*ResembleHelper : {
        require: 'codeceptjs-resemblehelper',
        baseFolder: '../screenshots/base/',
        diffFolder: '../screenshots/diff/',
        prepareBaseImage: true
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