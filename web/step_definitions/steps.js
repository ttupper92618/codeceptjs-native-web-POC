const { I } = inject();
// Add in your custom step files

Given('I have launched the app', () => {
  I.amOnPage('https://www.saucedemo.com/');
  I.saveScreenshot('login_view_web.png');
});

Given('I have logged in', () => {
  I.amOnPage('https://www.saucedemo.com/');
  I.click({id: 'user-name'});
  I.fillField({id: 'user-name'}, 'standard_user');
  I.click({id: 'password'});
  I.fillField({id: 'password'}, 'secret_sauce');
  I.click({id: 'login-button'});
});

When('I have entered a valid username and password', () => {
  I.click({id: 'user-name'});
  I.fillField({id: 'user-name'}, 'standard_user');
  I.click({id: 'password'});
  I.fillField({id: 'password'}, 'secret_sauce');
});

When('I have entered an invalid username or password', () => {
  I.click({id: 'user-name'});
  I.fillField({id: 'user-name'}, 'standard_user');
  I.click({id: 'password'});
  I.fillField({id: 'password'}, 'bob');
});

When('I click on a product', () => {
  I.click('Sauce Labs Backpack');
});

Then('I should be able to log in', () => {
  I.click({id: 'login-button'});
  I.waitForText('Sauce Labs Backpack', 3);
  I.dontSee('Epic sadface: Username and password do not match any user in this service');
});

Then('I should not be able to log in', () => {
  I.click({id: 'login-button'});
  I.waitForText('Epic sadface: Username and password do not match any user in this service', 3);
  I.dontSee('Sauce Labs Backpack');
});

Then('I should be able to see product details', () => {
  I.saveScreenshot('login_view_web.png');
});

Then('I should not see a visual difference between login and the login designs', () => {
  I.saveScreenshot('login_view_web.png');
    I.seeVisualDiff('login_view_web.png', {tolerance: 0});
});