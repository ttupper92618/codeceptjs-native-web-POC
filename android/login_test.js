Feature('login');

Scenario('I should be able to login with the correct username and password', ({ I }) => {
  I.wait(3);
  I.see('Username');
  I.tap('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
  I.tap('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.tap('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
});

Scenario('I should not be able to login with an incorrect username or password', ({ I }) => {
  I.wait(3);
  I.see('Username');
  I.tap('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'bob');
  I.tap('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.tap('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.seeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3); 
});

Scenario('I should be able to see details', ({ I }) => {
  // login
  I.wait(3);
  I.see('Username');
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
