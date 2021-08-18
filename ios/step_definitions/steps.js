const { I } = inject();
// Add in your custom step files

Given('I have launched the app', () => {
  I.wait(3);
  I.see('Username');
  I.saveScreenshot('login_view.png');
});

Given('I have logged in', () => {
  I.wait(3);
  I.see('Username');
  I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
});

When('I have entered a valid username and password', () => {
  I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
});

When('I have entered an invalid username or password', () => {
  I.tap('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'bob');
  I.tap('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
});

When('I click on a product', () => {
  I.tap('(//XCUIElementTypeStaticText[@name="test-Item title"])[2]');
});

Then('I should be able to log in', () => {
  I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3)
  I.dontSeeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
});

Then('I should not be able to log in', () => {
  I.tap('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.seeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
  I.dontSeeElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]');
});

Then('I should be able to see product details', () => {
  I.seeElement('//XCUIElementTypeStaticText[@name="A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."]');
  I.tap('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');
});

Then('I should not see a visual difference between login and the login designs', () => {
  I.saveScreenshot('login_view.png');
  I.seeVisualDiff('login_view.png', {tolerance: 0});
});