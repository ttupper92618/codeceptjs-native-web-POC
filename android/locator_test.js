Feature('locator');

Scenario('test something on android', ({ I }) => {
  setTimeout(() => {
    I.see('Welcome to Zillow!')
  }, 3000);
});
