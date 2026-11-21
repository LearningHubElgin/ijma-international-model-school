const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  const dotsBefore = await page.evaluate(() => {
    const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
    return Array.from(dots).map(d => d.className);
  });
  console.log('Dots before ended event:', dotsBefore);

  console.log('Dispatching ended event on video...');
  await page.evaluate(() => {
    const v = document.querySelector('section[aria-label="Hero Showcase"] video');
    v.dispatchEvent(new Event('ended'));
  });

  await page.waitForTimeout(1000);

  const dotsAfter = await page.evaluate(() => {
    const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
    return Array.from(dots).map(d => d.className);
  });
  console.log('Dots after ended event:', dotsAfter);

  await browser.close();
})();
