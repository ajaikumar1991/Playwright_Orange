import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
  
  // Switch to iframe
  const frame = page.frames().find(frame => frame.name() === 'iframeResult');
  const element = await frame.$('#demo');
  
  // Perform double click
  await element.dblclick();

  await browser.close();
})();
