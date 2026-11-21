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
  await page.waitForTimeout(1500);

  // Scroll down to feature cards
  await page.evaluate(() => window.scrollTo(0, 1800));
  await page.waitForTimeout(1500);

  // Hover over the first feature card
  const cards = await page.$$('section.bg-\\[\\#FFEFE4\\] a');
  console.log('Feature cards found:', cards.length);

  if (cards.length > 0) {
    await cards[0].hover();
    await page.waitForTimeout(500);
    const bg = await cards[0].evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log('Card 0 hover background:', bg); // rgb(10, 92, 54) is #0A5C36
    await page.screenshot({ path: path.join(brainDir, 'ijma_feature_card_hover_deep_green.png') });
    console.log('Saved ijma_feature_card_hover_deep_green.png');
  }

  // Scroll down to Blog section View More button
  await page.evaluate(() => window.scrollTo(0, 4500));
  await page.waitForTimeout(1500);

  const blogBtn = await page.$('a[href="/blog"]:has-text("View More")');
  if (blogBtn) {
    const btnBg = await blogBtn.evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log('Blog View More button base color:', btnBg);
    await blogBtn.hover();
    await page.waitForTimeout(500);
    const btnHoverBg = await blogBtn.evaluate(el => window.getComputedStyle(el).backgroundColor);
    console.log('Blog View More button hover color:', btnHoverBg);
    await page.screenshot({ path: path.join(brainDir, 'ijma_blog_button_hover_green.png') });
    console.log('Saved ijma_blog_button_hover_green.png');
  }

  await browser.close();
  console.log('All tests finished successfully!');
})();
