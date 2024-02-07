import { test, expect } from '@playwright/test';

test('For iFrames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  await expect(page.getByRole('heading')).toContainText('An iFrame containing the TinyMCE WYSIWYG Editor');
  await expect(page.locator('#content')).toBeVisible();
  await page.frameLocator('iframe[title="Rich Text Area"]').getByText('Your content goes here.').click();
  await page.frameLocator('iframe[title="Rich Text Area"]').getByLabel('Rich Text Area. Press ALT-0').fill('Your content goes here.Hello There!');
  await expect(page.frameLocator('iframe[title="Rich Text Area"]').getByText('Your content goes here.Hello')).toBeVisible();
});

test('Web tables/Pagination', async ({ page }) => {
  await page.goto('https://demo.opencart.com/admin/index.php?route=common/login');
  await expect(page.locator('#form-login div').filter({ hasText: 'Username' })).toBeVisible();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('demo');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('demo');
  await page.getByRole('button', { name: ' Login' }).click();
  await page.getByRole('button').nth(1).click();
  await page.getByRole('link', { name: ' Customers ' }).click();
  await page.getByRole('link', { name: 'Customers' }).click();
});