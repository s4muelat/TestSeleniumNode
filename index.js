// Import the library.
const { Builder, By } = require('selenium-webdriver');

// Define an asynchronous function that will automate the login process for a website.
async function automationLogin() {
  // Create a new instance using the Chrome browser.
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Try to open the website that we want to log in to.
    await driver.get('http://127.0.0.1/loginTestClick');
    await driver.sleep(3 * 1000)

    // Find the email input element and enter your email address.
    const emailElement = await driver.findElement(By.id('email'));
    await emailElement.sendKeys('test@email.com');

    await driver.sleep(3 * 1000)

    // Find the password input element and enter your password.
    const passwordElement = await driver.findElement(By.id('pass'));
    await passwordElement.sendKeys('123456');

    await driver.sleep(3 * 1000)

    // Find the submit button and click it to log in.
    const submitButton = await driver.findElement(By.id('submit'));
    await submitButton.click();

    await driver.sleep(60 * 1000)

} catch (err) {
    // Log any errors that occur.
    console.error(err);
  } finally {
    // Quit the driver when we're done.
    await driver.quit();
  }
}

// Call the `automationLogin()` function to start the login process.
automationLogin();