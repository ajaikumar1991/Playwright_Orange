//@ts-check
import { test, expect } from '@playwright/test';

test('Select Single Drop Down', async ({ page }) => {
  await page.goto('https://www.letskodeit.com/practice');
  await expect(page.locator('#carselect')).toBeVisible();

  //Directly pass the Visible text

  await page.locator('#carselect').selectOption('benz');
  await page.waitForTimeout(3000);
  await page.locator('#carselect').selectOption('bmw');
  await page.waitForTimeout(3000);
  await page.locator('#carselect').selectOption('honda');
  await page.waitForTimeout(3000);


  //By using label/Visible Text

  await page.locator('#carselect').selectOption({label:'Benz'});
  await page.waitForTimeout(3000);
  await page.locator('#carselect').selectOption({label:'BMW'});
  await page.waitForTimeout(3000);
  await page.locator('#carselect').selectOption({label:'Honda'});
  await page.waitForTimeout(3000);

  //using index 

  await page.locator('#carselect').selectOption({index:1})
  await page.close();

});

test('Select Multiple Drop Down', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');

    await page.locator('#multiple-select-example').selectOption(['Apple','Orange','Peach']);

    await page.waitForTimeout(2000);

    //Assertions
    //1) Check no of options in drop down - approach1

    const options=await page.locator('#multiple-select-example')
    await expect(options).toHaveCount(3)

    //Approach 2

    const optionNew=await page.$$('#multiple-select-example')
    await expect(optionNew.length).toBe(2)

    await page.close();


});
  

