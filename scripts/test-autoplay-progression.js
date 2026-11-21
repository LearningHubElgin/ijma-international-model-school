const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  console.log('Dispatching ended event on video to move to Slide 2...');
  await page.evaluate(() => {
    const v = document.querySelector('section[aria-label="Hero Showcase"] video');
    v.dispatchEvent(new Event('ended'));
  });

  await page.waitForTimeout(800);

  const getActiveDot = async () => {
    return await page.evaluate(() => {
      const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
      let idx = -1;
      dots.forEach((d, i) => {
        if (d.classList.contains('w-8')) idx = i;
      });
      return idx;
    });
  };

  console.log('Current slide index:', await getActiveDot()); // Expected: 1 (slide 2)

  console.log('Waiting 3.5 seconds for autoplay to advance image slide 2 to slide 3...');
  await page.waitForTimeout(3500);

  console.log('Slide index after 3.5s:', await getActiveDot()); // Expected: 2 (slide 3)

  console.log('Waiting another 3.2 seconds for image slide 3 to advance to slide 4...');
  await page.waitForTimeout(3200);

  console.log('Slide index after 3.2s:', await getActiveDot()); // Expected: 3 (slide 4)

  await browser.close();
})();
