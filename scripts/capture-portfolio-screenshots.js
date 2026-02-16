/**
 * Captures screenshots of portfolio URLs and saves them to public/portfolio/.
 * Uses ScreenshotOne API: https://screenshotone.com/
 *
 * Setup:
 * 1. Sign up at https://screenshotone.com/ (free tier: 100 screenshots/month).
 * 2. Create an Access Key in the dashboard.
 * 3. Run: SCREENSHOTONE_ACCESS_KEY=your_key node scripts/capture-portfolio-screenshots.js
 *    On Windows (PowerShell): $env:SCREENSHOTONE_ACCESS_KEY="your_key"; node scripts/capture-portfolio-screenshots.js
 *
 * Optional: viewport width for screenshot (default 1200).
 *   SCREENSHOT_VIEWPORT_WIDTH=1400 node scripts/capture-portfolio-screenshots.js
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const OUT_DIR = join(ROOT, 'public', 'portfolio');

const PORTFOLIO_ITEMS = [
  { slug: 'notle-client', url: 'https://notle-client.vercel.app/' },
  { slug: 'guessmethod', url: 'https://guessmethod.com/' },
  { slug: 'keen-chaja', url: 'https://keen-chaja-4aaf31.netlify.app/' },
  { slug: '5th-world', url: 'https://5th-world.netlify.app/' },
];

const accessKey = process.env.SCREENSHOTONE_ACCESS_KEY;
const viewportWidth = process.env.SCREENSHOT_VIEWPORT_WIDTH || '1200';

if (!accessKey) {
  console.error('Missing SCREENSHOTONE_ACCESS_KEY. Set it in your environment.');
  console.error('  PowerShell: $env:SCREENSHOTONE_ACCESS_KEY="your_key"; node scripts/capture-portfolio-screenshots.js');
  process.exit(1);
}

if (!existsSync(OUT_DIR)) {
  mkdirSync(OUT_DIR, { recursive: true });
}

const screenshotOneUrl = (url) => {
  const params = new URLSearchParams({
    access_key: accessKey,
    url,
    viewport_width: viewportWidth,
    viewport_height: '800',
    device_scale_factor: '2',
    format: 'png',
    block_ads: 'true',
    block_cookie_banners: 'true',
  });
  return `https://api.screenshotone.com/take?${params.toString()}`;
};

async function capture() {
  for (const { slug, url } of PORTFOLIO_ITEMS) {
    const outPath = join(OUT_DIR, `${slug}.png`);
    try {
      const apiUrl = screenshotOneUrl(url);
      const res = await fetch(apiUrl);
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const buffer = Buffer.from(await res.arrayBuffer());
      writeFileSync(outPath, buffer);
      console.log(`Saved ${slug}.png`);
    } catch (err) {
      console.error(`Failed ${slug}:`, err.message);
    }
  }
}

capture();
