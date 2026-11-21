const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  });

  const brainDir = 'C:/Users/Saumajeet/.gemini/antigravity/brain/0d035553-2e87-4996-909e-d333b0242986';
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:3005', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // 1. Verify YouTube links
  const ytLinks = await page.evaluate(() => {
    const anchors = Array.from(document.querySelectorAll('a[aria-label="YouTube"], a[href*="youtube.com"]'));
    return anchors.map(a => a.href);
  });
  console.log('YouTube links on Home:', ytLinks);

  // 2. Scroll to FeatureGridSection and hover over a card
  const featureCard = await page.$('a[href="/academics#islamic-studies"], a[href="/academics#stem"]');
  if (featureCard) {
    await featureCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await featureCard.hover();
    await page.waitForTimeout(600);

    const cardBg = await featureCard.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    console.log('Hovered Feature card computed background-color:', cardBg);
    await page.screenshot({ path: path.join(brainDir, 'ijma_card_deep_green_hover.png') });
    console.log('Saved ijma_card_deep_green_hover.png');
  }

  // 3. Scroll to StepByStep horizontal card and hover
  const stepCard = await page.$('a[href="/programmes"]');
  if (stepCard) {
    await stepCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await stepCard.hover();
    await page.waitForTimeout(600);

    const stepBg = await stepCard.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });
    console.log('Hovered StepByStep card computed background-color:', stepBg);
    await page.screenshot({ path: path.join(brainDir, 'ijma_step_card_deep_green_hover.png') });
    console.log('Saved ijma_step_card_deep_green_hover.png');
  }

  await browser.close();
  console.log('All hover tests completed successfully!');
})();
