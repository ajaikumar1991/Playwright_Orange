import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  await page.waitForLoadState('domcontentloaded');
  await expect(page.getByPlaceholder('Full Name')).toBeVisible();
  await expect(page.locator('#userName-label')).toContainText('Full Name');
  await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('AJai Kumar');
  await expect(page.getByPlaceholder('name@example.com')).toBeVisible();
  await expect(page.locator('#userEmail-label')).toContainText('Email');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('kb.ajaikumar1992@gmail.com');
  await expect(page.getByPlaceholder('Current Address')).toBeVisible();
  await expect(page.locator('#currentAddress-label')).toContainText('Current Address');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('chennai 600047');
  await page.getByPlaceholder('Current Address').press('Control+a');
  await page.getByPlaceholder('Current Address').press('Control+c');
  await expect(page.locator('#permanentAddress')).toBeVisible();
  await expect(page.locator('#permanentAddress-label')).toContainText('Permanent Address');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('chennai 600047');
  await expect(page.getByRole('button', { name: 'Submit' })).toBeVisible();
  await page.getByRole('button', { name: 'Submit' }).click();
});