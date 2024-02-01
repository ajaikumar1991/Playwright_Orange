//@ts-check
import { test, expect } from '@playwright/test';

test('Radio Button', async ({ page }) => {

    await page.goto('https://www.letskodeit.com/practice');

    // Validating the visibility
    await expect(page.locator('#radio-btn-example').getByText('BMW')).toBeVisible();

    //Asserion for text
    await expect(page.locator('#radio-btn-example')).toContainText('BMW');

    //Enable Radio Button Click
    await page.locator('#bmwradio').check();

    //Assertions post checking the radio button
    await expect(page.locator("//input[@id='bmwradio']")).toBeChecked();
    expect(await page.locator("//input[@id='benzradio']").isChecked()).toBeFalsy();
    expect(await page.locator("//input[@id='hondaradio']").isChecked()).toBeFalsy();

    await page.close();
});


//Single Check box

test('Single Check Box', async ({ page }) => {

    await page.goto('https://www.letskodeit.com/practice');

    await page.locator("//input[@id='bmwcheck']").check();

    //Assertions
    await expect(page.locator("//input[@id='bmwcheck']")).toBeChecked();
    expect(await page.locator("//input[@id='bmwcheck']").isChecked()).toBeTruthy();
    expect(await page.locator("//input[@id='benzcheck']").isChecked()).toBeFalsy();
    expect(await page.locator("//input[@id='hondacheck']").isChecked()).toBeFalsy();
    await page.waitForTimeout(3000);

    //To uncheck
    await page.locator("//input[@id='bmwcheck']").uncheck();
    await page.waitForTimeout(3000);

    await page.close();
});


//Multiple Check box

test('Select All Check Box', async ({ page }) => {

    await page.goto('https://www.letskodeit.com/practice');
    const checkboxes = await page.$$('//input[@name="cars" and @type="checkbox"]');
    for (let index = 0; index < checkboxes.length; index++) {
        await checkboxes[index].check()
    }
    await page.screenshot({ path: 'checkboxes_checked123.png' });
    await page.close();
});

//Random Check box

test('Select Random Check Box', async ({ page }) => {

    await page.goto('https://www.letskodeit.com/practice');
    const checkboxSelector = await page.$$('//input[@name="cars" and @type="checkbox"]');
    const randomCheckboxIndex = Math.floor(Math.random() * checkboxSelector.length);
    await checkboxSelector[randomCheckboxIndex].check();
    await page.screenshot({ path: 'random_checkbox_checked2.png' });
    await page.waitForTimeout(3000);
    await page.close();
});

//input boxes


test('Input Boxes', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    await expect(page.getByRole('heading')).toContainText('Practice Page');
    await expect(page.getByPlaceholder('Enabled/Disabled Field')).toBeVisible();
    await page.getByPlaceholder('Enabled/Disabled Field').click();
    await page.getByPlaceholder('Enabled/Disabled Field').fill('Search Dell');
    await page.getByRole('button', { name: 'Disable' }).click();
    await page.close();
});
