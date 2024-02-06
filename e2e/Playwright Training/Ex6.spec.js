//@ts-check
import { test, expect } from '@playwright/test'

test('Mouse Hover', async function ({ page }) {

    await page.goto("https://demo.opencart.com/");
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
