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
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
});

When('I have entered a valid username and password', () => {
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
});

When('I have entered an invalid username or password', () => {
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'bob');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
});

When('I click on a product', () => {
  I.click('(//android.widget.TextView[@content-desc="test-Item title"])[2]');
});

Then('I should be able to log in', () => {
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
});

Then('I should not be able to log in', () => {
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.seeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView');
});

Then('I should be able to see product details', () => {
  I.seeElement('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]');
  I.click('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]');
});

Then('I should not see a visual difference between login and the login designs', () => {
  I.saveScreenshot('login_view.png');
  I.seeVisualDiff('login_view.png', {tolerance: 2, prepareBaseImage: false});
});