const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true, channel: 'chrome' });
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Find section[aria-label="School Facilities"]
    const sec = await page.$('section[aria-label="School Facilities"]');
    if (sec) {
      await sec.scrollIntoViewIfNeeded();
      await page.waitForTimeout(1000);
      
      const screenshotPath = 'C:\\Users\\Saumajeet\\.gemini\\antigravity\\brain\\0d035553-2e87-4996-909e-d333b0242986\\clone_facilities_staggered.png';
      await page.screenshot({ path: screenshotPath });
      console.log('Saved staggered screenshot to:', screenshotPath);
      
      // Hover on card 3 (Play Area) to match Image 1
      const cards = await page.$$('section[aria-label="School Facilities"] .group');
      if (cards.length > 2) {
        await cards[2].hover();
        await page.waitForTimeout(600);
        const hoveredPath = 'C:\\Users\\Saumajeet\\.gemini\\antigravity\\brain\\0d035553-2e87-4996-909e-d333b0242986\\clone_facilities_playarea_hovered.png';
        await page.screenshot({ path: hoveredPath });
        console.log('Saved Play Area hovered screenshot to:', hoveredPath);
      }
    }
    
    await browser.close();
  } catch (err) {
    console.error(err);
  }
})();
