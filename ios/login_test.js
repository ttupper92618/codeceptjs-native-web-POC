Feature('login');

Scenario('I should be able to login with the correct username and password', ({ I }) => {
  setTimeout(() => {
    I.see('Username');
  }, 3000);
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3)
  I.dontSeeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
});

Scenario('I should not be able to login with an incorrect username or password', ({ I }) => {
  setTimeout(() => {
    I.see('Username');
  }, 3000);
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'bob');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.seeElement('//XCUIElementTypeStaticText[@name="Username and password do not match any user in this service."]');
  I.dontSeeElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]');
});

Scenario('I should be able to see details', ({ I }) => {
  // login
  setTimeout(() => {
    I.see('Username');
  }, 3000);
  I.click('//XCUIElementTypeTextField[@name="test-Username"]');
  I.fillField('//XCUIElementTypeTextField[@name="test-Username"]', 'standard_user');
  I.click('//XCUIElementTypeSecureTextField[@name="test-Password"]');
  I.fillField('//XCUIElementTypeSecureTextField[@name="test-Password"]', 'secret_sauce');
  I.click('//XCUIElementTypeOther[@name="test-LOGIN"]');
  I.waitForElement('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]', 3);

  // should be able to click an image to get details
  I.click('(//XCUIElementTypeStaticText[@name="test-Item title"])[1]')
  I.seeElement('//XCUIElementTypeStaticText[@name="carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection."]');
  I.click('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');

  // should be able to click a label to see details
  I.click('(//XCUIElementTypeStaticText[@name="test-Item title"])[2]');
  I.seeElement('//XCUIElementTypeStaticText[@name="A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included."]');
  I.click('//XCUIElementTypeOther[@name="test-BACK TO PRODUCTS"]');
});
