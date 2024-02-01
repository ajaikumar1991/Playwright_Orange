const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  // Navigate to a webpage
  await page.goto('https://petstore.octoperf.com/');

  // Specify the role and href of the link
  const role = 'link';
  const expectedHref = 'https://petstore.octoperf.com/actions/Catalog.action';

  // Use getByRole to select the link
  const link = await page.$(`[role=${role}][href="${expectedHref}"], [role=${role}]`);

  // Check if the link is found
  if (link) {
    // Validate additional criteria if needed
    const isValidLink = await link.evaluate(link => link.href.startsWith(expectedHref));

    // If the link is valid, click on it
    if (isValidLink) {
      await link.click();
    } else {
      console.log('The link is not valid or does not meet the criteria.');
    }
  } else {
    console.log('Link not found with the specified role and href.');
  }

  // Close the browser
  await browser.close();
})();
