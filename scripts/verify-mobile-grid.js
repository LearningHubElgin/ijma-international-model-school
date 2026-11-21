const { chromium } = require('playwright');
const path = require('path');

async function verifyMobileGrid() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
  });

  const page = await context.newPage();
  const artifactsDir = 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986';

  console.log('Navigating to http://localhost:3005 on mobile viewport 375x812...');
  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2000);

  // 1. Scroll to and capture FeatureGridSection
  const featureSection = page.locator('section.bg-\\[\\#FFEFE4\\]');
  await featureSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const featureScreenshotPath = path.join(artifactsDir, 'ijma_mobile_features_compact_grid.png');
  await featureSection.screenshot({ path: featureScreenshotPath });
  console.log('Saved mobile features screenshot to:', featureScreenshotPath);

  // 2. Scroll to and capture ProgrammesGridSection
  const programmesSection = page.locator('section[aria-label="Programmes"]');
  await programmesSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);

  const programmesScreenshotPath = path.join(artifactsDir, 'ijma_mobile_programmes_compact_grid.png');
  await programmesSection.screenshot({ path: programmesScreenshotPath });
  console.log('Saved mobile programmes screenshot to:', programmesScreenshotPath);

  // 3. Scroll specifically to the bottom pills in ProgrammesGridSection
  const bottomPills = page.locator('section[aria-label="Programmes"] .grid.grid-cols-2').nth(1);
  await bottomPills.scrollIntoViewIfNeeded();
  await page.waitForTimeout(800);

  const pillsScreenshotPath = path.join(artifactsDir, 'ijma_mobile_programmes_pills_2x3_grid.png');
  await bottomPills.screenshot({ path: pillsScreenshotPath });
  console.log('Saved mobile pills grid screenshot to:', pillsScreenshotPath);

  // 4. Capture full viewport at Feature Grid and Programme Pills
  await featureSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactsDir, 'ijma_mobile_features_viewport.png') });

  await bottomPills.scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(artifactsDir, 'ijma_mobile_programmes_viewport.png') });

  await browser.close();
  console.log('All mobile grid screenshots captured successfully!');
}

verifyMobileGrid().catch((err) => {
  console.error('Error during mobile grid verification:', err);
  process.exit(1);
});
