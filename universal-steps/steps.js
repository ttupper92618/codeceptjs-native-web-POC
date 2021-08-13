const { I } = inject();
// Add in your custom step files

Given('I have launched the app', () => {
  I.wait(3);
  I.see('Username');

  I.runOnIOS(() => {
    I.saveScreenshot('login_view_ios.png');
  });

  I.runOnAndroid(() => {
    I.saveScreenshot('login_view_android.png');
  }); 
});

Given('I have logged in', () => {
  I.wait(3);
  I.see('Username');

  I.runOnIOS(() => {
    I.click('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
    I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
    I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  });

  I.runOnAndroid(() => {
    I.click('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
    I.click('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
    I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  });
});

When('I have entered a valid username and password', () => {
  I.runOnIOS(() => {
    I.click('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
    I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  });

  I.runOnAndroid(() => {
    I.click('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
    I.click('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  });
});

When('I have entered an invalid username or password', () => {
  I.runOnIOS(() => {
    I.click('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'bob');
    I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  });

  I.runOnAndroid(() => {
    I.click('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'bob');
    I.click('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  });
});

When('I click on a product', () => {
  I.runOnIOS(() => {
    I.click('(//XCUIElementTypeStaticText[@name="test-Item title"])[2]');
  });

  I.runOnAndroid(() => {
    I.click('Sauce Labs Backpack');
  });
});

Then('I should be able to log in', () => {
  I.runOnIOS(() => {
    I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
    I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3)
    I.dontSeeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
  });

  I.runOnAndroid(() => {
    I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
    I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
  });
});

Then('I should not be able to log in', () => {
  I.runOnIOS(() => {
    I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
    I.seeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
    I.dontSeeElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]');
  });

  I.runOnAndroid(() => {
    I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    I.seeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
    I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView');
  });
});

Then('I should be able to see product details', () => {
  I.runOnIOS(() => {
    I.seeElement('//XCUIElementTypeStaticText[@name="A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."]');
    I.click('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');
  });

  I.runOnAndroid(() => {
    I.seeElement('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]');
    I.click('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]');
  });
});

Then('I should not see a visual difference between login and the login designs', () => {
  I.runOnIOS(() => {
    I.saveScreenshot('login_view_ios.png');
    I.seeVisualDiff('login_view_ios.png', {tolerance: 0});
  });

  I.runOnAndroid(() => {
    I.saveScreenshot('login_view_android.png');
    I.seeVisualDiff('login_view_android.png', {tolerance: 0});
  });
});