import { test, expect } from '@playwright/test';

//Launch the Page

test('test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    //Enter the username after checking the field is enabled/not and check whether username entered is correct or not

    await expect(page.locator('[data-test="username"]')).toBeVisible();
    await expect(page.locator('[data-test="username"]')).toBeEnabled();

    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await expect(page.locator('[data-test="username"]')).toHaveValue('standard_user');

    //Enter the password after checking the field is enabled/not and check whether password entered is correct or not

    await expect(page.locator('[data-test="password"]')).toBeVisible();
    await expect(page.locator('[data-test="password"]')).toBeEnabled();

    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await expect(page.locator('[data-test="password"]')).toHaveValue('secret_sauce');

    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    await expect(page.locator('#header_container')).toContainText('Products');

    ///////////////////////////////////////////////////////////////////////////

    await expect(await page.locator('.inventory_item').count()).toEqual(6);

    ///////////////////////////////////////////////////////////////////////////

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();


    await page.locator('a').filter({ hasText: '2' }).click();

    // change the locator 

    await expect(page.locator('[data-test="checkout"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();


    await expect(page.locator('[data-test="firstName"]')).toBeVisible();
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Ajai Kumar');

    await expect(page.locator('[data-test="lastName"]')).toBeVisible();
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('KB');

    await expect(page.locator('[data-test="postalCode"]')).toBeVisible();
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('600047');

    await expect(page.locator('[data-test="continue"]')).toBeVisible();
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('#checkout_summary_container')).toContainText('Payment Information');

    await expect(page.locator('[data-test="finish"]')).toBeVisible();
    await page.locator('[data-test="finish"]').click();

    await expect(page.getByRole('heading')).toContainText('Thank you for your order!');

    await expect(page.locator('[data-test="back-to-products"]')).toBeVisible();
    await page.locator('[data-test="back-to-products"]').click();
    await expect(page.locator('#header_container')).toContainText('Products');

    await page.getByRole('button', { name: 'Open Menu' }).click();

    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await page.getByRole('link', { name: 'Logout' }).click();

    await page.close();

});