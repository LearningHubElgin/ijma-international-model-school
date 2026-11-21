const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });

  const brainDir = 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986';
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  console.log('Navigating to http://localhost:3005...');
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // Scroll to blog section
  const blogSection = await page.$('section[aria-label="Educational Highlights & Blog"]');
  if (blogSection) {
    await blogSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);

    const videoState = await page.evaluate(() => {
      const section = document.querySelector('section[aria-label="Educational Highlights & Blog"]');
      const iframe = section ? section.querySelector('iframe') : null;
      const soundBtn = section ? section.querySelector('button[aria-label*="video audio"]') : null;
      return {
        hasIframe: !!iframe,
        iframeSrc: iframe ? iframe.src : null,
        soundBtnText: soundBtn ? soundBtn.textContent : null
      };
    });
    console.log('Blog section video state:', videoState);

    await page.screenshot({ path: path.join(brainDir, 'ijma_blog_youtube_video_background.png') });
    console.log('Saved ijma_blog_youtube_video_background.png');
  } else {
    console.log('Blog section not found by aria-label!');
  }

  await browser.close();
  console.log('Verification script completed!');
})();
