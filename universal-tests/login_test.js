Feature('login');

Scenario('I should be able to login with the correct username and password', ({ I }) => {
  I.wait(3);
  I.see('Username');

  I.runOnIOS(() => {
    I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
    I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
    I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
    I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3)
    I.dontSeeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
  });

  I.runOnAndroid(() => {
    I.tap('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
    I.tap('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
    I.tap('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
    I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
  });
});

Scenario('I should not be able to login with an incorrect username or password', ({ I }) => {
  I.wait(3);
  I.see('Username');

  I.runOnIOS(() => {
    I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'bob');
    I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
    I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
    I.seeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
    I.dontSeeElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]');
  });

  I.runOnAndroid(() => {
    I.tap('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'bob');
    I.tap('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
    I.tap('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    I.seeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
    I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3); 
  });
});

Scenario('I should be able to see details', ({ I }) => {
  // login
  I.wait(3);
  I.see('Username');

  I.runOnIOS(() => {
    I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
    I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
    I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
    I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
    I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
    I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3);

    // should be able to click a label to see details
    I.tap('(//XCUIElementTypeStaticText[@name="test-Item title"])[2]');
    I.seeElement('//XCUIElementTypeStaticText[@name="A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."]');
    I.tap('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');
  });

  I.runOnAndroid(() => {
    I.tap('//android.widget.EditText[@content-desc="test-Username"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
    I.tap('//android.widget.EditText[@content-desc="test-Password"]');
    I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
    I.tap('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3);

    // should be able to click a label to see details
    I.tap('Sauce Labs Backpack');
    I.seeElement('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]');
    I.tap('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]');
  });
});
