import { test, expect } from '@playwright/test';

//Test Case 1

test('test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await expect(page.getByRole('strong')).toContainText('Congratulations student. You successfully logged in!');
  await expect(page.getByRole('article')).toContainText('Log out');
});


//Test Case 2

test('test1', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('student123');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#error')).toContainText('Your username is invalid!');
  });


  //Test Case 3

  test('test2', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByLabel('Username').click();
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Username').press('Tab');
    await page.getByLabel('Password').fill('password');
    await page.getByRole('button', { name: 'Submit' }).click();
    await expect(page.locator('#error')).toContainText('Your password is invalid!');

    await page.close();
  });