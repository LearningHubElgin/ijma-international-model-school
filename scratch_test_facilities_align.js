const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  try {
    const pngBase64 = fs.readFileSync('public/assets/decorative/custom-shape-bg-layer.png').toString('base64');
    const maskUri = `data:image/png;base64,${pngBase64}`;
    
    const bookSvg = fs.readFileSync('public/assets/decorative/doodle-book.svg', 'utf8');
    const slideSvg = fs.readFileSync('public/assets/decorative/doodle-slide.svg', 'utf8');
    const busSvg = fs.readFileSync('public/assets/decorative/doodle-bus.svg', 'utf8');
    
    const browser = await chromium.launch({ headless: true, channel: 'chrome' });
    const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
    await page.setContent(`
      <style>
        body {
          background: linear-gradient(180deg, #ffefe4 0%, #ffefe4 90%, #ffffff 100%);
          margin: 0;
          padding: 80px 40px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .container {
          max-width: 1520px;
          margin: 0 auto;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          align-items: start; /* <--- Top aligned! */
        }
        .card-wrapper {
          position: relative;
          transition: transform 0.3s ease;
        }
        .card-wrapper:hover {
          transform: translateY(-4px);
        }
        .card {
          width: 100%;
          background-color: #0A6375;
          -webkit-mask-image: url('${maskUri}');
          mask-image: url('${maskUri}');
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          padding: 56px 28px 48px;
          box-sizing: border-box;
          color: white;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: background-color 0.3s ease;
        }
        .card-wrapper:hover .card {
          background-color: #EB1551;
        }
        h3 {
          font-size: 24px;
          font-weight: 700;
          margin: 0 0 6px;
          letter-spacing: 0.5px;
        }
        .squiggle {
          margin: 6px 0 16px;
        }
        p {
          font-size: 14px;
          line-height: 1.65;
          margin: 0 0 28px;
          color: rgba(255, 255, 255, 0.95);
        }
        .btn {
          display: inline-block;
          background-color: #EB1551;
          color: white;
          font-size: 13px;
          font-weight: 700;
          padding: 10px 28px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        .card-wrapper:hover .btn {
          background-color: #c40e48;
        }
        .corner-icon {
          position: absolute;
          bottom: -6px;
          left: -12px;
          width: 68px;
          height: 68px;
          color: #1CBBB4;
          z-index: 20;
          pointer-events: none;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .corner-icon svg {
          width: 100%;
          height: 100%;
          fill: currentColor;
        }
        /* When card is hovered, icon moves inside and becomes faint watermark */
        .card-wrapper:hover .corner-icon {
          transform: translate(45px, -45px);
          opacity: 0.15;
          color: #000000;
        }
      </style>
      <div class="container">
        <div class="grid">
          <!-- Card 1 -->
          <div class="card-wrapper">
            <div class="card">
              <h3>Class Room</h3>
              <div class="squiggle">
                <svg width="56" height="7" viewBox="0 0 64 8" fill="none"><path d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4" stroke="#f7941e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p>The school offers MONTESSARI based classrooms that focus is on hands-on-learning and collaborative play in each child which enable him/her to explore and eventually channelise the innate and acquired potential or strengths</p>
              <div class="btn">View More</div>
            </div>
            <div class="corner-icon">${bookSvg}</div>
          </div>

          <!-- Card 2 -->
          <div class="card-wrapper">
            <div class="card">
              <h3>Healthy Foods</h3>
              <div class="squiggle">
                <svg width="56" height="7" viewBox="0 0 64 8" fill="none"><path d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4" stroke="#f7941e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p>Nutritious ,Tasty and Healthy and balanced meals prepared in consultation by our nutritionist to develop independent eating habits, healthy eating and group eating etiquettes.</p>
              <div class="btn">View More</div>
            </div>
            <div class="corner-icon">${bookSvg}</div>
          </div>

          <!-- Card 3 (Simulate Hover) -->
          <div class="card-wrapper hovered-sim">
            <div class="card" style="background-color: #EB1551;">
              <h3>Play Area</h3>
              <div class="squiggle">
                <svg width="56" height="7" viewBox="0 0 64 8" fill="none"><path d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4" stroke="#f7941e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p>Rough and uneven surfaces provide opportunities for the development of physical strength, balance and coordination</p>
              <div class="btn" style="background-color: #c40e48;">View More</div>
            </div>
            <div class="corner-icon" style="transform: translate(45px, -45px); opacity: 0.15; color: #000000;">${slideSvg}</div>
          </div>

          <!-- Card 4 -->
          <div class="card-wrapper">
            <div class="card">
              <h3>Transport</h3>
              <div class="squiggle">
                <svg width="56" height="7" viewBox="0 0 64 8" fill="none"><path d="M2 4 Q 5 1, 8 4 T 14 4 T 20 4 T 26 4 T 32 4 T 38 4 T 44 4 T 50 4 T 56 4 T 62 4" stroke="#f7941e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
              <p>Pick and drop transport facility is available for children.</p>
              <div class="btn">View More</div>
            </div>
            <div class="corner-icon">${busSvg}</div>
          </div>
        </div>
      </div>
    `);
    
    await page.screenshot({ path: 'scratch_test_facilities_align.png' });
    console.log('Saved scratch_test_facilities_align.png');
    await browser.close();
  } catch (e) {
    console.error(e);
  }
})();
