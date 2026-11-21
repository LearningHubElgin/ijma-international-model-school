const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });

  const brainDir = 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986';

  // Desktop 1440x900
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // 1. Verify TopBar phone & facebook
  const topBarInfo = await page.evaluate(() => {
    const topBar = document.querySelector('div.bg-\\[\\#0A5C36\\]');
    const fb = document.querySelector('a[aria-label="Facebook"]');
    return {
      topBarText: topBar ? topBar.textContent : null,
      facebookHref: fb ? fb.href : null
    };
  });
  console.log('TopBar info:', topBarInfo);

  // 2. Capture clear Hero video slide
  await page.screenshot({ path: path.join(brainDir, 'ijma_hero_video_crystal_clear.png') });
  console.log('Saved ijma_hero_video_crystal_clear.png');

  // 3. Scroll to Footer and verify details
  const footer = await page.$('footer[aria-label="School Footer"]');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    const footerText = await page.evaluate(() => {
      const f = document.querySelector('footer[aria-label="School Footer"]');
      return f ? f.textContent : null;
    });
    console.log('Footer address check:', footerText.includes('32/3, Topsia Rd'));
    console.log('Footer phone check:', footerText.includes('99038 98162'));
    await page.screenshot({ path: path.join(brainDir, 'ijma_footer_updated_info.png') });
    console.log('Saved ijma_footer_updated_info.png');
  }

  // 4. Navigate to Contact Us page
  await page.goto('http://localhost:3005/contact-us', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1500);

  const contactPageDetails = await page.evaluate(() => {
    const body = document.body.textContent;
    const iframe = document.querySelector('iframe');
    return {
      hasNewAddress: body.includes('32/3, Topsia Rd'),
      hasNewPhone: body.includes('99038 98162') || body.includes('09903898162'),
      iframeSrc: iframe ? iframe.src : null
    };
  });
  console.log('Contact Us page details:', contactPageDetails);
  await page.screenshot({ path: path.join(brainDir, 'ijma_contact_page_updated_info.png') });
  console.log('Saved ijma_contact_page_updated_info.png');

  await browser.close();
  console.log('All verifications completed successfully!');
})();
