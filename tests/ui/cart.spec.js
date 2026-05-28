const { test, expect } = require('@playwright/test');

test('Add product to cart and checkout', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Add item to cart
  await page.click('.inventory_item button');

  // Go to cart
  await page.click('.shopping_cart_link');

  // Verify item added
  await expect(page.locator('.cart_item')).toBeVisible();

  // Checkout
  await page.click('#checkout');
  await page.fill('#first-name', 'Ajay');
  await page.fill('#last-name', 'Kumar');
  await page.fill('#postal-code', '500001');
  await page.click('#continue');
  await page.click('#finish');

  // Verify success
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});