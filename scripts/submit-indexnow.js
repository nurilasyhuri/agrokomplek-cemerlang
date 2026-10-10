import fs from 'node:fs';
import path from 'node:path';

const HOST = 'agrokomplekcemerlang.com';
const KEY = 'd4a79b28c13e45f992160357e84bf92a';
const SITEMAP_PATH = path.resolve('dist/sitemap-0.xml');

async function run() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`Sitemap not found at: ${SITEMAP_PATH}. Run "npm run build" first.`);
    process.exit(1);
  }

  const sitemapXml = fs.readFileSync(SITEMAP_PATH, 'utf-8');
  const urlMatches = sitemapXml.match(/<loc>(https:\/\/[^<]+)<\/loc>/g);

  if (!urlMatches || urlMatches.length === 0) {
    console.error('No URLs found in sitemap.');
    process.exit(1);
  }

  const urls = urlMatches.map((m) => m.replace(/<\/?loc>/g, '').trim());
  console.log(`Submitting ${urls.length} URLs to IndexNow for host: ${HOST}...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    console.log(`IndexNow response status: ${res.status} ${res.statusText}`);
    if (res.status === 200 || res.status === 202) {
      console.log('✅ URLs submitted successfully to IndexNow (Bing, Yahoo, DuckDuckGo, Yandex)!');
    } else {
      const errText = await res.text();
      console.warn(`Response: ${errText}`);
    }
  } catch (err) {
    console.error('Failed to submit to IndexNow:', err);
  }
}

run();
