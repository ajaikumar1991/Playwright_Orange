import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

  // Switch to iframe
  const iframe = page.frames().find(frame => frame.name() === 'iframeResult');
  const elementHandle = await iframe.waitForSelector('#myDIV');

  // Double click on the element
  await elementHandle.dblclick();

  // Wait for the "hello" text to appear
  await iframe.waitForSelector('p');

  // Get the text content of the paragraph
  const textContent = await iframe.$eval('p', el => el.textContent);

  // Validate the assertion for the text
  if (textContent.includes('hello')) {
    console.log('Assertion passed: "hello" text found.');
  } else {
    console.error('Assertion failed: "hello" text not found.');
  }

  await browser.close();
});
