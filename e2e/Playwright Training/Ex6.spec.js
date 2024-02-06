//@ts-check
import { test, expect } from '@playwright/test'

test.only('Mouse Hover', async function ({ page }) {

    await page.goto("https://demo.opencart.com/");
    //const newLocal = "//a[normalize-space()='Macs (0)']";
    await page.locator("//a[normalize-space()='Desktops']").hover()
    await page.locator("//a[normalize-space()='Mac (1)']").hover()
    await page.locator("//a[normalize-space()='Mac (1)']").click()
    await page.close();
});

// works

test('Right Click', async ({ page }) => {
  await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
  const rightClick=await page.locator("//span[@class='context-menu-one btn btn-neutral']")
  await rightClick.click({button:'right'});
await page.locator('li').filter({ hasText: 'Quit' }).click();
});


test('Mouse Double Click',async function({page}){

    await page.goto("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
    await page.waitForTimeout(10000);
    const buttonLocator = page.locator("//button[normalize-space()='Copy Text']")
    buttonLocator.dblclick(); 
    await expect(page.locator("//input[@id='field2']")).toHaveText("Hello World!");
    await page.waitForTimeout(3000);
})