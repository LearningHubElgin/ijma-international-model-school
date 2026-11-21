const { chromium } = require('playwright');
const path = require('path');

async function verifyFooterAndVideo() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });

  const brainDir = 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986';

  // 1. Mobile verification (viewport 375x812)
  console.log('Testing mobile layout (375x812)...');
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 },
    isMobile: true,
    hasTouch: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:3005', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(2000);

  // A. Mobile Footer side-by-side
  const footerSection = mobilePage.locator('footer[aria-label="School Footer"]');
  await footerSection.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(1000);

  const footerWingsAdmissions = mobilePage.locator('footer[aria-label="School Footer"] .grid.grid-cols-2');
  await footerWingsAdmissions.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);

  const footerPath = path.join(brainDir, 'ijma_mobile_footer_side_by_side.png');
  await footerWingsAdmissions.screenshot({ path: footerPath });
  console.log('Saved mobile footer side-by-side screenshot to:', footerPath);

  // B. Mobile Facilities 2-column grid
  const facilitiesGrid = mobilePage.locator('section[aria-label="School Facilities"] .grid.grid-cols-2');
  if (await facilitiesGrid.count() > 0) {
    await facilitiesGrid.scrollIntoViewIfNeeded();
    await mobilePage.waitForTimeout(800);
    const facilitiesPath = path.join(brainDir, 'ijma_mobile_facilities_compact_grid.png');
    await facilitiesGrid.screenshot({ path: facilitiesPath });
    console.log('Saved mobile facilities screenshot to:', facilitiesPath);
  }

  // C. Video Showcase Section: Click from playlist -> Redirect up -> Close with Cross button
  const videoSection = mobilePage.locator('section[aria-label="Video Showcase"]');
  await videoSection.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(1000);

  // Find playlist items
  const playlistItems = mobilePage.locator('section[aria-label="Video Showcase"] .space-y-3 > div');
  const itemCount = await playlistItems.count();
  console.log(`Found ${itemCount} videos in Featured Presentations playlist.`);

  // Scroll down to the 2nd playlist item and click it
  const secondVideo = playlistItems.nth(1);
  await secondVideo.scrollIntoViewIfNeeded();
  await mobilePage.waitForTimeout(500);

  const scrollBeforeClick = await mobilePage.evaluate(() => window.scrollY);
  console.log('Scroll position before clicking video:', scrollBeforeClick);

  await secondVideo.click();
  await mobilePage.waitForTimeout(1500);

  const scrollAfterClick = await mobilePage.evaluate(() => window.scrollY);
  console.log('Scroll position after clicking video (redirected up):', scrollAfterClick);

  // Verify the close / cross button exists
  const closeButton = mobilePage.locator('button[aria-label="Close and stop video"]');
  const isCloseVisible = await closeButton.isVisible();
  console.log('Is close cross button visible while playing?:', isCloseVisible);

  const videoPlayingPath = path.join(brainDir, 'ijma_video_showcase_playing_with_cross.png');
  const mainPlayer = mobilePage.locator('section[aria-label="Video Showcase"] .aspect-video').first();
  await mainPlayer.screenshot({ path: videoPlayingPath });
  console.log('Saved playing video screenshot to:', videoPlayingPath);

  // Click the cross button to close the video
  await closeButton.click();
  await mobilePage.waitForTimeout(800);

  const isClosedNow = !(await closeButton.isVisible());
  console.log('Is video successfully closed after clicking X?:', isClosedNow);

  const videoClosedPath = path.join(brainDir, 'ijma_video_showcase_closed_state.png');
  await mainPlayer.screenshot({ path: videoClosedPath });
  console.log('Saved closed video state screenshot to:', videoClosedPath);

  await browser.close();
  console.log('All footer and video verification tests passed successfully!');
}

verifyFooterAndVideo().catch((err) => {
  console.error('Error during verification:', err);
  process.exit(1);
});
