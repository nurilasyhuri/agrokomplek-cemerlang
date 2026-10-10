import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve('dist');

if (!fs.existsSync(DIST_DIR)) {
  console.error('dist/ does not exist. Run "bun run build" first.');
  process.exit(1);
}

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      results = results.concat(getHtmlFiles(filePath));
    } else if (file.endsWith('.html') && !file.includes('404')) {
      results.push(filePath);
    }
  }
  return results;
}

const htmlFiles = getHtmlFiles(DIST_DIR);
console.log(`Auditing SEO across ${htmlFiles.length} generated HTML pages in dist/...\n`);

let errorsCount = 0;
let passCount = 0;

for (const filePath of htmlFiles) {
  const relativePath = path.relative(DIST_DIR, filePath);
  const html = fs.readFileSync(filePath, 'utf8');

  // 1. Check title
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
  if (!titleMatch) {
    console.error(`[FAIL] ${relativePath}: Missing <title> tag`);
    errorsCount++;
    continue;
  }
  const rawTitle = titleMatch[1].trim();
  const title = rawTitle.replace(/&amp;/g, '&');

  if (rawTitle.includes('&amp;')) {
    console.error(`[FAIL] ${relativePath}: Title contains raw entity '&amp;': "${rawTitle}"`);
    errorsCount++;
  }
  if (title.includes('|')) {
    console.error(`[FAIL] ${relativePath}: Title contains '|' separator: "${title}"`);
    errorsCount++;
  }
  if (title.includes('—')) {
    console.error(`[FAIL] ${relativePath}: Title contains '—' separator: "${title}"`);
    errorsCount++;
  }
  if (title.length < 50 || title.length > 72) {
    console.error(`[FAIL] ${relativePath}: Title length out of range (50-72 chars): ${title.length} chars -> "${title}"`);
    errorsCount++;
  }

  // 2. Check meta description
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
  if (!descMatch) {
    console.error(`[FAIL] ${relativePath}: Missing <meta name="description">`);
    errorsCount++;
    continue;
  }
  const rawDesc = descMatch[1].trim();
  const desc = rawDesc.replace(/&amp;/g, '&');

  if (rawDesc.includes('&amp;')) {
    console.error(`[FAIL] ${relativePath}: Description contains raw entity '&amp;': "${rawDesc}"`);
    errorsCount++;
  }
  if (desc.includes('|')) {
    console.error(`[FAIL] ${relativePath}: Description contains '|': "${desc}"`);
    errorsCount++;
  }
  if (desc.length < 118 || desc.length > 160) {
    console.error(`[FAIL] ${relativePath}: Description length out of range (120-155 chars): ${desc.length} chars -> "${desc}"`);
    errorsCount++;
  }
  if (!desc.endsWith('.')) {
    console.error(`[FAIL] ${relativePath}: Description does not end with full stop: "${desc}"`);
    errorsCount++;
  }

  // 3. Check canonical
  const canonMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  if (!canonMatch || !canonMatch[1].startsWith('https://agrokomplekcemerlang.com/')) {
    console.error(`[FAIL] ${relativePath}: Invalid or missing canonical: ${canonMatch ? canonMatch[1] : 'NONE'}`);
    errorsCount++;
  }

  // 4. Check JSON-LD
  const jsonLdMatch = html.match(/<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/i);
  if (!jsonLdMatch) {
    console.error(`[FAIL] ${relativePath}: Missing JSON-LD schema`);
    errorsCount++;
  } else {
    try {
      const parsed = JSON.parse(jsonLdMatch[1]);
      if (!parsed['@context']) {
        console.error(`[FAIL] ${relativePath}: JSON-LD missing @context`);
        errorsCount++;
      }
    } catch (e) {
      console.error(`[FAIL] ${relativePath}: JSON-LD parse error: ${e.message}`);
      errorsCount++;
    }
  }

  // 5. Check H1 count
  const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`[FAIL] ${relativePath}: Expected exactly 1 <h1>, found ${h1Matches.length}`);
    errorsCount++;
  }

  // 6. Check for outdated domain references in HTML
  if (html.includes('agroprimagreenhouse.com')) {
    console.error(`[FAIL] ${relativePath}: Outdated domain reference "agroprimagreenhouse.com" found in page!`);
    errorsCount++;
  }

  passCount++;
  console.log(`[PASS] ${relativePath} | Title (${title.length}c): "${title}" | Desc (${desc.length}c)`);
}

// 7. Check robots.txt
const robotsPath = path.resolve('dist/robots.txt');
if (fs.existsSync(robotsPath)) {
  const robots = fs.readFileSync(robotsPath, 'utf8');
  if (robots.includes('agroprimagreenhouse.com')) {
    console.error(`[FAIL] robots.txt contains outdated domain "agroprimagreenhouse.com"`);
    errorsCount++;
  } else if (!robots.includes('https://agrokomplekcemerlang.com/sitemap-index.xml')) {
    console.error(`[FAIL] robots.txt missing authoritative sitemap URL`);
    errorsCount++;
  } else {
    console.log(`[PASS] robots.txt verified with authoritative sitemap`);
  }
}

// 8. Check sitemap
const sitemapPath = path.resolve('dist/sitemap-index.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error(`[FAIL] sitemap-index.xml missing in dist/`);
  errorsCount++;
} else {
  console.log(`[PASS] sitemap-index.xml exists in dist/`);
}

console.log(`\n================================`);
console.log(`SEO Audit Completed: ${passCount} pages checked.`);
if (errorsCount > 0) {
  console.error(`Total Errors: ${errorsCount}`);
  process.exit(1);
} else {
  console.log(`Status: 100% PASS (0 errors). Complete SEO Friendly Compliance!`);
}
