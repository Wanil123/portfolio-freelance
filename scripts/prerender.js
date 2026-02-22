/**
 * Prerender script — generates static HTML from the SPA at build time.
 * AI bots (Claude, ChatGPT, etc.) and crawlers that don't execute JS
 * will receive the full rendered content instead of an empty shell.
 *
 * Usage: node scripts/prerender.js (runs automatically after vite build)
 */

import { createServer } from "http";
import { readFileSync, writeFileSync } from "fs";
import { resolve, join, extname } from "path";
import puppeteer from "puppeteer";

const DIST_DIR = resolve("dist");
const PORT = 4567;

// Simple static file server for the dist folder
const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(content);
      } catch {
        // SPA fallback — serve index.html for any route
        const html = readFileSync(join(DIST_DIR, "index.html"));
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);
      }
    });

    server.listen(PORT, () => {
      console.log(`[prerender] Static server running on http://localhost:${PORT}`);
      resolvePromise(server);
    });
  });
}

async function prerender() {
  console.log("[prerender] Starting prerender...");

  const server = await startServer();

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();

    // Set a desktop viewport
    await page.setViewport({ width: 1280, height: 800 });

    // Navigate and wait for network to be idle (all lazy components loaded)
    await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait a bit more for animations/lazy components to settle
    await page.waitForFunction(
      () => document.querySelector("#contact") !== null,
      { timeout: 10000 }
    );

    // Small extra delay for any remaining async renders
    await new Promise((r) => setTimeout(r, 2000));

    // Get the fully rendered HTML
    const html = await page.content();

    // Write the prerendered HTML
    const outputPath = join(DIST_DIR, "index.html");
    writeFileSync(outputPath, html, "utf-8");

    console.log("[prerender] Successfully wrote prerendered index.html");

    // Quick sanity check — verify key content is present
    const checks = ["PrimeDev Studios", "LamIPict", "Groupe Destin"];
    for (const keyword of checks) {
      if (html.includes(keyword)) {
        console.log(`[prerender] ✓ Found "${keyword}" in output`);
      } else {
        console.warn(`[prerender] ✗ Missing "${keyword}" in output`);
      }
    }
  } finally {
    await browser.close();
    server.close();
    console.log("[prerender] Done.");
  }
}

prerender().catch((err) => {
  console.error("[prerender] Error:", err.message);
  process.exit(1);
});
