const { I } = inject();
// Add in your custom step files

Given('I have launched the app', () => {
  setTimeout(() => {
    I.see('Username');
  }, 3000);
});

Given('I have logged in', () => {
  setTimeout(() => {
    I.see('Username');
  }, 3000);
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
});

When('I have entered a valid username and password', () => {
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
});

When('I have entered an invalid username or password', () => {
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'bob');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
});

When('I click on a product', () => {
  I.click('(//XCUIElementTypeStaticText[@name="test-Item title"])[2]');
});

Then('I should be able to log in', () => {
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3)
  I.dontSeeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
});

Then('I should not be able to log in', () => {
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.seeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
  I.dontSeeElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]');
});

Then('I should be able to see product details', () => {
  I.seeElement('//XCUIElementTypeStaticText[@name="A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."]');
  I.click('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');
});