import { test, expect } from '@playwright/test';


test("Click one of the elements that is visible out of two", async ({
    page,
  }) => {
    await page.goto("https://the-internet.herokuapp.com/disappearing_elements");
  
    const gallery = page.getByRole("link", { name: "Gallery" });
    const portfolio = page.getByRole("link", { name: "Portfolio" });
  
    if (await gallery.isVisible()) {
        await gallery.click();

    } else if (await portfolio.isVisible()) {
      await portfolio.click();
    }
  
    await expect(page).toHaveURL(/.*gallery|.*portfolio/);
  });