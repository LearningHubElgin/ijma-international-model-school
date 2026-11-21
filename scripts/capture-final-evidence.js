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
  await page.waitForTimeout(2500);

  // 1. Capture Slide 1 (Video slide playing)
  await page.screenshot({ path: path.join(brainDir, 'ijma_hero_video_slide_live.png') });
  console.log('Saved ijma_hero_video_slide_live.png');

  // 2. Click next to Slide 2 (Sports meet)
  await page.click('button[aria-label="Next Slide"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(brainDir, 'ijma_hero_slide2_sports.png') });
  console.log('Saved ijma_hero_slide2_sports.png');

  // 3. Click next to Slide 3 (Classroom desks)
  await page.click('button[aria-label="Next Slide"]');
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(brainDir, 'ijma_hero_slide3_classroom.png') });
  console.log('Saved ijma_hero_slide3_classroom.png');

  // 4. Capture Smart Activities
  const smart = await page.$('section:has-text("Smart Activities")');
  if (smart) {
    await smart.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1200);
    await page.screenshot({ path: path.join(brainDir, 'ijma_smart_activities_real_photos.png') });
    console.log('Saved ijma_smart_activities_real_photos.png');
  }

  // 5. Mobile 375x812
  const mobileContext = await browser.newContext({ viewport: { width: 375, height: 812 } });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: path.join(brainDir, 'ijma_hero_video_mobile.png') });
  console.log('Saved ijma_hero_video_mobile.png');

  await browser.close();
  console.log('All final screenshots saved successfully!');
})();
