const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true, channel: 'chrome' });
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.goto('https://gdgoenkarohini.com/', { waitUntil: 'domcontentloaded', timeout: 30000 });
    
    // Inspect the 4 cards and their hover behavior
    const hoverData = await page.evaluate(async () => {
      const widget = document.querySelector('.elementor-element-d12b885');
      const items = Array.from(widget.querySelectorAll('.wdt-content-item'));
      
      const unhovered = items.map((item, i) => {
        const r = item.getBoundingClientRect();
        const iconWrap = item.querySelector('.wdt-content-icon-wrapper');
        const iconSvg = iconWrap ? iconWrap.querySelector('svg') : null;
        const iconRect = iconWrap ? iconWrap.getBoundingClientRect() : null;
        const iconStyle = iconWrap ? window.getComputedStyle(iconWrap) : null;
        const svgStyle = iconSvg ? window.getComputedStyle(iconSvg) : null;
        const btn = item.querySelector('.wdt-content-button a');
        const btnStyle = btn ? window.getComputedStyle(btn) : null;
        
        return {
          cardIndex: i,
          title: item.querySelector('.wdt-content-title') ? item.querySelector('.wdt-content-title').innerText : '',
          cardRect: { width: r.width, height: r.height, top: r.top, left: r.left },
          iconPosition: iconRect ? {
            width: iconRect.width,
            height: iconRect.height,
            top: iconRect.top - r.top,
            left: iconRect.left - r.left,
            bottom: r.bottom - iconRect.bottom
          } : null,
          iconStyles: iconStyle ? {
            position: iconStyle.position,
            transform: iconStyle.transform,
            opacity: iconStyle.opacity,
            color: iconStyle.color
          } : null,
          svgStroke: svgStyle ? svgStyle.stroke : null,
          svgFill: svgStyle ? svgStyle.fill : null,
          svgColor: svgStyle ? svgStyle.color : null,
          btnStyles: btnStyle ? {
            backgroundColor: btnStyle.backgroundColor,
            color: btnStyle.color,
            borderRadius: btnStyle.borderRadius
          } : null
        };
      });
      
      return { unhovered };
    });
    
    console.log('UNHOVERED DATA:');
    console.log(JSON.stringify(hoverData, null, 2));
    
    // Now trigger hover on card 2 (Play Area) in page and inspect
    const cards = await page.$$('.elementor-element-d12b885 .wdt-content-item');
    if (cards[2]) {
      await cards[2].hover();
      await page.waitForTimeout(500);
      
      const hoveredState = await page.evaluate(() => {
        const item = document.querySelectorAll('.elementor-element-d12b885 .wdt-content-item')[2];
        const r = item.getBoundingClientRect();
        const iconWrap = item.querySelector('.wdt-content-icon-wrapper');
        const iconRect = iconWrap ? iconWrap.getBoundingClientRect() : null;
        const iconStyle = iconWrap ? window.getComputedStyle(iconWrap) : null;
        const btn = item.querySelector('.wdt-content-button a');
        const btnStyle = btn ? window.getComputedStyle(btn) : null;
        const comp = window.getComputedStyle(item);
        const beforeComp = window.getComputedStyle(item, ':before');
        
        return {
          cardRect: { width: r.width, height: r.height },
          cardBg: beforeComp.backgroundColor,
          iconPosition: iconRect ? {
            top: iconRect.top - r.top,
            left: iconRect.left - r.left,
            bottom: r.bottom - iconRect.bottom
          } : null,
          iconStyles: iconStyle ? {
            transform: iconStyle.transform,
            opacity: iconStyle.opacity
          } : null,
          btnStyles: btnStyle ? {
            backgroundColor: btnStyle.backgroundColor,
            color: btnStyle.color
          } : null
        };
      });
      
      console.log('HOVERED STATE FOR CARD 2:');
      console.log(JSON.stringify(hoveredState, null, 2));
    }
    
    await browser.close();
  } catch (err) {
    console.error('Error:', err);
  }
})();
