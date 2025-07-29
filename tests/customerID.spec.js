const { test, expect } = require('@playwright/test');

test.describe('Customer ID new account page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/new-account');
  });

  test('should load new account page', async ({ page }) => {
    await expect(page.locator('h1')).toHaveText('Create New Account');
  });

  test('should show error if Customer ID is empty', async ({ page }) => {
    await page.click('button[type="submit"]');

    const message = page.locator('#message');
    await expect(message).toBeVisible({ timeout: 5000 });
    await expect(message).toHaveText('Customer ID is required!', { timeout: 5000 });
    await expect(message).toHaveCSS('color', 'rgb(255, 0, 0)');
  });

  test('should show success message with valid Customer ID', async ({ page }) => {
    await page.fill('#customerId', '12345');
    await page.click('button[type="submit"]');

    const message = page.locator('#message');
    await expect(message).toBeVisible({ timeout: 5000 });
    await expect(message).toHaveText('Customer ID 12345 created successfully!', { timeout: 5000 });
    await expect(message).toHaveCSS('color', 'rgb(0, 128, 0)');
  });
});