const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const users = require('../../test-data/users.json');
const path = require('path');
console.log(__dirname);

test.describe('Login Feature Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });

  // Loop through test data
  for (const user of users) {

    test(`Login Test for ${user.username} - valid: ${user.valid}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      // Act
      await loginPage.login(user.username, user.password);

      // Assert
      if (user.valid) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(page.locator('.error-message-container')).toBeVisible();
      }

    });

  }

});