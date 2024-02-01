import { test, expect } from '@playwright/test';

test('Validate the Octoperf URL has title', async ({ page }) => {

   // Step 1: 

    await page.goto('https://petstore.octoperf.com/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/JPetStore Demo/);

    // Step 2:

    await page.getByRole('link', { name: 'Enter the Store' }).click();
    // Expects page to have a title with the name.
    await expect(page).toHaveTitle(/JPetStore Demo/);

    //Step 3:

    await page.getByRole('link', { name: 'Sign In' }).click();
    // Expects page to have a title with the name.

    const locator = page.locator('input');
    await expect(locator).toHaveAttribute('signon', 'Login');

});


// test('get started link', async ({ page }) => {
//     await page.goto('https://petstore.octoperf.com');
//     // Click the get started link.
//     await page.getByRole('link', { name: 'Enter the Store' }).click();
//     // Expects page to have a title with the name.
//     await expect(page).toHaveTitle(/JPetStore Demo/);
//   });