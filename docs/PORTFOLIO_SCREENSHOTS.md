# Portfolio page screenshots

The **Portfolio** page (`/portfolio`) shows previews of each project. Previews use either:

1. **Screenshot images** (recommended) – generated once and stored in `public/portfolio/`. Fast and consistent.
2. **Live iframe fallback** – if an image is missing, the page embeds the live site in a small iframe (some sites block this).

## Generating screenshots (ScreenshotOne)

We use [ScreenshotOne](https://screenshotone.com/) (free tier: 100 screenshots/month).

1. Sign up at https://screenshotone.com/ and create an **Access Key** in the dashboard.
2. Set the key and run the script:
   - **PowerShell:**  
     `$env:SCREENSHOTONE_ACCESS_KEY="your_key"; npm run portfolio:capture`
   - **Bash:**  
     `SCREENSHOTONE_ACCESS_KEY=your_key npm run portfolio:capture`
3. Images are written to `public/portfolio/*.png`. Commit them or add `public/portfolio/*.png` to `.gitignore` and run the script in CI before build.

Optional: set `SCREENSHOT_VIEWPORT_WIDTH` (default `1200`) to change screenshot width.

## Other options

- **Microlink** – [microlink.io](https://microlink.io) – free tier; returns a screenshot URL in JSON; you’d need a small script change to fetch that URL and save the image.
- **URLBox, Browserless** – other paid APIs; same idea: call API at build time and save images to `public/portfolio/`.
