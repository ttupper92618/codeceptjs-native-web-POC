Feature('login');

Scenario('I should be able to login with the correct username and password', ({ I }) => {
  I.wait(3);
  I.see('Username');
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
});

Scenario('I should not be able to login with an incorrect username or password', ({ I }) => {
  I.wait(3);
  I.see('Username');
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'bob');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)
  I.dontSeeElement('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
});

Scenario('I should be able to see details', ({ I }) => {
  // login
  I.wait(3);
  I.see('Username');
  I.click('//android.widget.EditText[@content-desc="test-Username"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Username"]', 'standard_user');
  I.click('//android.widget.EditText[@content-desc="test-Password"]');
  I.fillField('//android.widget.EditText[@content-desc="test-Password"]', 'secret_sauce');
  I.click('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
  I.waitForElement('//android.view.ViewGroup[@content-desc="test-Cart drop zone"]/android.view.ViewGroup/android.widget.TextView', 3)

  // should be able to click a label to see details
  I.click('(//android.widget.TextView[@content-desc="test-Item title"])[2]');
  I.seeElement('//android.view.ViewGroup[@content-desc="test-Description"]/android.widget.TextView[2]');
  I.click('//android.view.ViewGroup[@content-desc="test-BACK TO PRODUCTS"]');
});
