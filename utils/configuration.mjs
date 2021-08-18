const path = require('path');

export let keystore = {
  perfecto: {
    uid: "trial",
    key: "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICI2ZDM2NmJiNS01NDAyLTQ4MmMtYTVhOC1kODZhODk4MDYyZjIifQ.eyJpYXQiOjE2Mjg1Mzk2NzcsImp0aSI6IjU2YzdhZTY1LTQ1MTMtNGM4Ny1hMGRkLWNkZjcwZTU5YWZkYSIsImlzcyI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsImF1ZCI6Imh0dHBzOi8vYXV0aDMucGVyZmVjdG9tb2JpbGUuY29tL2F1dGgvcmVhbG1zL3RyaWFsLXBlcmZlY3RvbW9iaWxlLWNvbSIsInN1YiI6IjExZTAwOTdkLTBhZDAtNDRiNi1hMzFhLWQxODlkN2Q1NGQ2MyIsInR5cCI6Ik9mZmxpbmUiLCJhenAiOiJvZmZsaW5lLXRva2VuLWdlbmVyYXRvciIsIm5vbmNlIjoiMzJhMzFhOGMtMDM2My00NDMzLWEyNTQtMjdhMjA1NzFlZTNkIiwic2Vzc2lvbl9zdGF0ZSI6IjQ5OTE1NjEwLWRjNzUtNDA1My05MjE3LWM5YTBlNDNlYmExNiIsInNjb3BlIjoib3BlbmlkIG9mZmxpbmVfYWNjZXNzIHByb2ZpbGUgZW1haWwifQ.7FsrtbdVfZkR-Ut0-4YpIgdu367eSaRiN1MOKTenT08"
  }
}

export let apps = {
  local: {
    ios: {
      appPath: "./sample_apps/iOS.app"
    },
    android: {
      appPath: "./sample_apps/Android.apk",
      activity: "com.swaglabsmobileapp.MainActivity"
    }
  },
  perfecto: {
    ios: {
      appPath: "PRIVATE:1629243373819_iOS.ipa"
    },
    android: {
      appPath: "PRIVATE:1628539608154_Android.apk",
      activity: "com.swaglabsmobileapp.MainActivity"
    }
  }
}

export let testProps = {
  perfectoUser: "thomastupper92618@gmail.com"
}

export let configHelper = {
  appium: {
    local: {
      ios: {
        platform: 'iOS',
        desiredCapabilities: {
          deviceName: 'iPhone 11',
          automationName: 'XCUITest',
          app: path.resolve(apps.local.ios.appPath)
        }
      },
      android: {
        platform: 'Android',
        device: 'emulator',
        desiredCapabilities: {
          platformName: 'Android',
          automationName: 'UiAutomator1',
          deviceName: 'Android Emulator',
          avd: 'Pixel_5_API_28',
          app: path.resolve(apps.local.android.appPath),
          appActivity: apps.local.android.appActivity
        }
      }
    },
    perfecto: {
      ios: {
        securityToken: keystore.perfecto.key,
        protocol: 'http',
        hostname: keystore.perfecto.uid + '.perfectomobile.com',
        path: '/nexperience/perfectomobile/wd/hub',
        port: 80,
        sync: true,
        bail: 0,
        desiredCapabilities: {
          securityToken: keystore.perfecto.key,
          automationName: 'XCUITest',
          autoLaunch: true,
          app: apps.perfecto.ios.appPath,
          autoInstrument: true,
          browserName: '',
          takesScreenshot: false,
          screenshotOnError: true,
          openDeviceTimeout: 5,
          waitForAvailableLicense: true,
          user: testProps.perfectoUser,
          platformName: 'ios',
          platformVersion: '14.2',
          location: 'NA-US-BOS',
          resolution: '1125x2436',
          manufacturer: 'Apple',
          model: 'iPhone-11 Pro',
          iOSResign: true
        },
        app: apps.perfecto.ios.appPath,
        platformName: 'ios',
        browserName: '',
        automationName: 'XCUITest',
        iOSResign: true
      },
      android: {
        securityToken: keystore.perfecto.key,
        protocol: 'http',
        hostname: keystore.perfecto.uid + '.perfectomobile.com',
        path: '/nexperience/perfectomobile/wd/hub',
        port: 80,
        sync: true,
        bail: 0,
        desiredCapabilities: {
          securityToken: keystore.perfecto.key,
          automationName: 'Appium',
          autoLaunch: true,
          platformName: 'Android',
          platformVersion: '10',
          manufacturer: 'Samsung',
          model: 'Galaxy S20',
          app: apps.perfecto.android.appPath,
          autoInstrument: false,
          appActivity: apps.perfecto.android.activity,
          browserName: '',
          takesScreenshot: false,
          screenshotOnError: true,
          openDeviceTimeout: 5,
          waitForAvailableLicense: true,
          user: testProps.perfectoUser
        },
        app: apps.perfecto.android.appPath,
        browserName: ''
      }
    }
  }
}