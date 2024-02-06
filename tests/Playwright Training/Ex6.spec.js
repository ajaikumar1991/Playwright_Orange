//@ts-check
import { test, expect } from '@playwright/test'

test('Mouse Hover', async function ({ page }) {

    await page.goto("https://demo.opencart.com/");
    //const newLocal = "//a[normalize-space()='Macs (0)']";
    await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
    await page.goto('https://demo.opencart.com/');
    await page.locator("//a[normalize-space()='Macs (0)']").first().hover();
    await page.screenshot({ path: 'hover_checked123.png' });
    await page.close();
})

// works

test('Right Click', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  const rightClick=await page.locator("//span[@class='context-menu-one btn btn-neutral']")
  await rightClick.click({button:'right'});
await page.locator('li').filter({ hasText: 'Quit' }).click();
});


test.only('Mouse Double Click',async function({page}){

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    await page.waitForTimeout(10000);
    const buttonLocator = page.locator("//button[normalize-space()='Copy Text']")
    buttonLocator.dblclick(); 
    await expect(page.locator("//input[@id='field2']")).toHaveText("Hello World!");
    await page.waitForTimeout(3000);
})