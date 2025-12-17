// scripts/convert-to-webp.js
// Script pour convertir les images JPG/PNG en WebP
// Usage: node scripts/convert-to-webp.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const DIRECTORIES = [
  './public/images',
  './public/assets/projects',
];

const EXTENSIONS = ['.jpg', '.jpeg', '.png'];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.includes(ext)) return;

  const outputPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  try {
    await sharp(filePath)
      .webp({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ Converted: ${path.basename(filePath)} -> ${path.basename(outputPath)}`);

    // Get file sizes for comparison
    const originalSize = fs.statSync(filePath).size;
    const webpSize = fs.statSync(outputPath).size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    console.log(`   Size: ${(originalSize / 1024).toFixed(1)}KB -> ${(webpSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${filePath}:`, error.message);
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath);
    } else {
      await convertToWebP(filePath);
    }
  }
}

async function main() {
  console.log('🖼️  Converting images to WebP format...\n');

  for (const dir of DIRECTORIES) {
    console.log(`\n📁 Processing: ${dir}`);
    await processDirectory(dir);
  }

  console.log('\n✨ Done! Remember to update image references in your code.');
  console.log('   Example: "/images/photo.jpg" -> "/images/photo.webp"');
}

main().catch(console.error);
