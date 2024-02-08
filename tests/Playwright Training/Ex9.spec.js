import { test, expect } from '@playwright/test';

test('Print Tables in Pagination', async ({ page }) => {
  await page.goto('https://demo.opencart.com/admin/index.php?route=common/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('demo');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('demo');
  await page.locator('//button[normalize-space()="Login"]').click();
  await page.waitForTimeout(2000)
  await page.locator('.btn-close').hover();
  await page.locator('.btn-close').click();
  await page.waitForTimeout(2000)
});














test('For iFrames', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/iframe');
  await expect(page.getByRole('heading')).toContainText('An iFrame containing the TinyMCE WYSIWYG Editor');
  await expect(page.locator('#content')).toBeVisible();
  await page.frameLocator('iframe[title="Rich Text Area"]').getByText('Your content goes here.').click();
  await page.frameLocator('iframe[title="Rich Text Area"]').getByLabel('Rich Text Area. Press ALT-0').fill('Your content goes here.Hello There!');
  await expect(page.frameLocator('iframe[title="Rich Text Area"]').getByText('Your content goes here.Hello')).toBeVisible();
});

test('Web tables/Pagination', async ({ page }) => {
  await page.goto('https://demo.opencart.com/admin/index.php?route=common/login');
  //await page.waitForTimeout(10000)
  //await expect(page.locator('#form-login div').filter({ hasText: 'Username' })).toBeVisible();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('demo');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('demo');
  await page.locator('//button[normalize-space()="Login"]').click();
  await page.waitForTimeout(2000)
  await page.locator('.btn-close').hover();
  await page.locator('.btn-close').click();
  await page.waitForTimeout(2000)

  const expanded = await page.locator('#menu-customer > a').getAttribute('class');
  if (expanded?.includes("collapsed")) {
      await page.locator('#menu-customer > a').click();
  }
  await page.locator('#menu-customer > ul a[href*="customer&"]').click();
  await page.waitForLoadState();


  let page_count = 1;
  let max_page_count = 2;

  while (page_count <= max_page_count) {

    if (page_count != 1) {

      await page.locator('//a[normalize-space()=">"]').click();
    }
    await page.waitForSelector('#customer tbody > tr');

   
    const rows = await page.locator('#customer tbody > tr').all();

    // console.log(rows.length)

    let data_count = 1;
    for (const row of rows) {

      console.log(`Page count - ${page_count} : Row count - ${data_count} | ${await row.locator('td').nth(1).textContent()} | ${await row.locator('td').nth(2).textContent()} | ${await row.locator('td').nth(3).textContent()} | ${await row.locator('td').nth(4).textContent()}`);

      data_count++;
    }
    await page.waitForTimeout(2000);
    page_count++;
  }

  await page.waitForTimeout(3000);
  await page.pause();

});