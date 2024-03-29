// @ts-check
import { expect, test } from '@playwright/test'


/// feedback use the logic for future or previous date.

test('Datepicker', async ({ page }) => {
    await page.goto('https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/');
    const date = '1/11/1999';
    await page.locator('#id-textbox-1').fill(date).then(async () => {
        await expect(page.locator('#id-textbox-1')).toHaveValue(date)
    });
});