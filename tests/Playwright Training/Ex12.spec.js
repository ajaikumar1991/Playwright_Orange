import { test, expect } from '@playwright/test';

test('Handle Multiple Pages', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Click Here' }).click();
  const page1 = await page1Promise;
  await expect(page1.getByRole('heading')).toContainText('New Window');
});