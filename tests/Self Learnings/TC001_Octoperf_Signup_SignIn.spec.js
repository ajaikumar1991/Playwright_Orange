import { test, expect } from '@playwright/test';

/*

Test Case Name : 001_TC_SignUp_Login_Logout

Traversal Flow 

Step 1: Launch URL - Validate Title
Step 2: Click on "Enter the Store" - Validate Title
Step 3: Click on "Sign In"
Step 4: CLick on "Register Now"
Step 5: Fill all the details & Click on Save Account Information

*/

test('test', async ({ page }) => {

    // Step 1: Launch Application
  await page.goto('https://petstore.octoperf.com/');
  await expect(page.getByRole('heading')).toContainText('Welcome to JPetStore 6');

  //Step 2: Click on Enter the Store
  await page.getByRole('link', { name: 'Enter the Store' }).click();
  await expect(page.getByRole('button')).toContainText('Search');

  // Step 3: Click on Sign In Link
  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Catalog')).toContainText('Please enter your username and password.');

  // Step 4: Click on Register Now! Link
  await page.getByRole('link', { name: 'Register Now!' }).click();
  await expect(page.locator('#Catalog')).toContainText('User Information');

  // Step 5: Fill all the Details and Save to Create New User

  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('qwerty1234');
  await page.locator('input[name="password"]').click();
  
  await page.locator('input[name="password"]').fill('qwerty1234');
  await page.locator('input[name="password"]').press('Tab');
  await page.locator('input[name="repeatedPassword"]').fill('qwerty1234');
  await page.locator('input[name="repeatedPassword"]').press('Tab');

  await page.locator('input[name="account\\.firstName"]').fill('ASDF');
  await page.locator('input[name="account\\.firstName"]').press('Tab');

  await page.locator('input[name="account\\.lastName"]').fill('FDSA');
  await page.locator('input[name="account\\.lastName"]').press('Tab');

  await page.locator('input[name="account\\.email"]').fill('asdfg@gmail.com');
  await page.locator('input[name="account\\.email"]').press('Tab');

  await page.locator('input[name="account\\.phone"]').fill('9988776655');
  await page.locator('input[name="account\\.phone"]').press('Tab');

  await page.locator('input[name="account\\.address1"]').fill('asdfghjk');
  await page.locator('input[name="account\\.address1"]').press('Tab');

  await page.locator('input[name="account\\.address2"]').fill('qwertyui');
  await page.locator('input[name="account\\.address2"]').press('Tab');

  await page.locator('input[name="account\\.city"]').fill('Chennai');
  await page.locator('input[name="account\\.city"]').press('Tab');

  await page.locator('input[name="account\\.state"]').fill('Tamil Nadu');
  await page.locator('input[name="account\\.state"]').press('Tab');

  await page.locator('input[name="account\\.zip"]').fill('600047');
  await page.locator('input[name="account\\.zip"]').press('Tab');

  await page.locator('input[name="account\\.country"]').fill('India');
  await page.locator('input[name="account\\.country"]').press('Tab');

  await page.locator('select[name="account\\.languagePreference"]').press('Tab');
  await page.locator('select[name="account\\.favouriteCategoryId"]').press('Tab');
  await page.getByRole('button', { name: 'Save Account Information' }).click();

  // Step 6: Click on Sign In button

  await page.getByRole('link', { name: 'Sign In' }).click();
  await expect(page.locator('#Catalog')).toContainText('Please enter your username and password.');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('qwerty1234');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('qwerty1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#MenuContent')).toContainText('Sign Out');

  // Step 7: Click on Sign out button

  await page.getByRole('link', { name: 'Sign Out' }).click();

  

});