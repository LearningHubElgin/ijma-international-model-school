const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  console.log('Navigating to http://localhost:3005...');
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // 1. Check hero section
  await page.waitForSelector('section[aria-label="Hero Showcase"]');
  console.log('Hero showcase section loaded.');

  // Check if video element is present on slide 1
  const videoExists = await page.evaluate(() => {
    const v = document.querySelector('section[aria-label="Hero Showcase"] video');
    if (!v) return null;
    return {
      src: v.src || v.currentSrc,
      paused: v.paused,
      muted: v.muted,
      currentTime: v.currentTime,
      duration: v.duration
    };
  });
  console.log('Slide 1 Video state immediately:', videoExists);

  // Take screenshot of video slide
  await page.screenshot({ path: 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986/ijma_hero_video_slide.png' });
  console.log('Saved ijma_hero_video_slide.png');

  // Wait 4.5 seconds to verify that it does NOT slide away after 3 seconds!
  console.log('Waiting 4.5 seconds to confirm video stays beyond 3-second image timer...');
  await page.waitForTimeout(4500);

  const videoStillActive = await page.evaluate(() => {
    const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
    const firstDot = dots[0];
    const isFirstActive = firstDot && firstDot.classList.contains('w-8');
    const v = document.querySelector('section[aria-label="Hero Showcase"] video');
    return {
      isFirstActive,
      currentTime: v ? v.currentTime : null,
      paused: v ? v.paused : null
    };
  });
  console.log('After 4.5s - Is video slide still active?', videoStillActive);

  // 2. Test auto-advance on video completion: seek to end
  console.log('Seeking video close to end to verify automatic slide transition upon video completion...');
  await page.evaluate(() => {
    const v = document.querySelector('section[aria-label="Hero Showcase"] video');
    if (v) {
      v.currentTime = v.duration - 0.5;
    }
  });

  // Wait 2 seconds for ended event and carousel scrollNext
  await page.waitForTimeout(2000);

  const slideAfterEnd = await page.evaluate(() => {
    const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
    let activeIndex = -1;
    dots.forEach((d, i) => {
      if (d.classList.contains('w-8')) activeIndex = i;
    });
    return { activeIndex };
  });
  console.log('Slide after video ended (expected: index 1 / slide 2):', slideAfterEnd);

  // Take screenshot of slide 2
  await page.screenshot({ path: 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986/ijma_hero_slide2_after_video.png' });
  console.log('Saved ijma_hero_slide2_after_video.png');

  // Wait 3.8 seconds to verify that image slide 2 advances automatically on the 3-second timer
  console.log('Waiting 3.8s for image slide 2 to advance via 3-second autoplay...');
  await page.waitForTimeout(3800);

  const slideAfter3s = await page.evaluate(() => {
    const dots = document.querySelectorAll('section[aria-label="Hero Showcase"] button[aria-label^="Go to slide"]');
    let activeIndex = -1;
    dots.forEach((d, i) => {
      if (d.classList.contains('w-8')) activeIndex = i;
    });
    return { activeIndex };
  });
  console.log('Slide after 3.8s (expected: index 2 / slide 3):', slideAfter3s);

  // Check custom crayon cursor presence
  const crayonCursorPresent = await page.evaluate(() => {
    const style = window.getComputedStyle(document.body);
    const customCursorEl = document.querySelector('[style*="crayon-main.png"]');
    return {
      bodyCursor: style.cursor,
      customCursorElement: !!customCursorEl
    };
  });
  console.log('Cursor check (expected: default/auto, element null):', crayonCursorPresent);

  // Scroll to Smart Activities and capture screenshot
  const smartActivities = await page.$('section:has-text("Smart Activities")');
  if (smartActivities) {
    await smartActivities.scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986/ijma_smart_activities_updated.png' });
    console.log('Saved ijma_smart_activities_updated.png');
  }

  await browser.close();
  console.log('All tests completed successfully!');
})();
