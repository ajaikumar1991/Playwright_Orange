//@ts-check

import { test, expect } from '@playwright/test';

test('Alerts', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        //check the type of alert- type of dialog
        expect(dialog.type()).toContain('alert');
        await page.waitForTimeout(3000)


        //check the alert message
        expect(dialog.message()).toContain('I am a JS Alert');
        await page.waitForTimeout(3000)

        await dialog.accept(); // will close the dialog box
        await page.waitForTimeout(3000)
    });

    //After this we have to click on dialog-before this we have to trigger the event by dialog handle
    await page.click("//button[normalize-space()='Click for JS Alert']")
    await page.waitForTimeout(3000)

    // Verify Message displayed after clicking on ok button
    await expect(page.locator("//p[@id='result']")).toHaveText('You successfully clicked an alert')
    await page.close();
});


test('Alerts Click OK', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        //check the type of alert- type of dialog
        expect(dialog.type()).toContain('confirm');
        await page.waitForTimeout(3000)


        //check the alert message
        expect(dialog.message()).toContain('I am a JS Confirm');
        await page.waitForTimeout(3000)

        await dialog.accept(); // will close the dialog box
        await page.waitForTimeout(3000)
    });

    await page.click("//button[normalize-space()='Click for JS Confirm']")
    await page.waitForTimeout(3000)

    // Verify Message displayed after clicking on ok button
    await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Ok')

    await page.close();


});


test('Alerts Click Cancel', async ({ page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog', async dialog => {

        //check the type of alert- type of dialog
        expect(dialog.type()).toContain('confirm');
        await page.waitForTimeout(3000)


        //check the alert message
        expect(dialog.message()).toContain('I am a JS Confirm');
        await page.waitForTimeout(3000)
        await dialog.dismiss(); // will close the dialog box
        await page.waitForTimeout(3000)
    });

    await page.click("//button[normalize-space()='Click for JS Confirm']")
    await page.waitForTimeout(3000)

    
    await expect(page.locator("//p[@id='result']")).toHaveText('You clicked: Cancel')
    await page.waitForTimeout(3000);
    await page.close();

});


test('Accept Value in Prompt', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
    page.on('dialog', async dialog => {
    
        // Verify Dialog Type is prompt  
        expect(dialog.type()).toContain('prompt');  
        
        // Verify Dialog Message  
        expect(dialog.message()).toContain('I am a JS prompt');
        
        //Verify Default Input Value
        //expect(dialog.defaultValue()).toContain('10');
        
        // Click on OK Button with any value
        await dialog.accept('Hello There');
    });
        
    // Click on Prompt Button
    await page.click("//button[normalize-space()='Click for JS Prompt']");
        
    // Verify Message after clicking on Ok button
    await expect(page.locator("//p[@id='result']")).toHaveText( 'You entered: Hello There');
    await page.close();

});