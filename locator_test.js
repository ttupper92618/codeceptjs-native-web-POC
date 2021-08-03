const path = require('path');

const androidCaps = {
  platformName: 'Android',
  automationName: 'UiAutomator2',
  deviceName: 'Android Emulator',
  avd: 'Pixel_5_API_28',
  app: path.resolve('./sample_apps/Zillow.apk')
};

const iosCaps = {
  deviceName: 'iPhone 11',
  automationName: 'XCUITest',
  app: path.resolve('./sample_apps/iOS.apk')
};

Feature('locator');

Scenario('test something', ({ I }) => {
  I.runOnAndroid((androidCaps) => {
    console.log('******* executed android locator')
  });
  
  I.runOnIOS((iosCaps) => {
    console.log('******* executed ios locator')
  });
});
