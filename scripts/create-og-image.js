// scripts/create-og-image.js
// Script pour créer l'image OG en PNG
// Usage: node scripts/create-og-image.js

const sharp = require('sharp');
const path = require('path');

async function createOGImage() {
  const inputPath = path.join(__dirname, '../public/og-cover.svg');
  const outputPath = path.join(__dirname, '../public/og-cover.png');

  try {
    await sharp(inputPath)
      .resize(1200, 630)
      .png({ quality: 90 })
      .toFile(outputPath);

    console.log('✅ OG image created successfully: public/og-cover.png');
  } catch (error) {
    console.error('❌ Error creating OG image:', error.message);
    console.log('\n💡 Alternative: Create the OG image manually:');
    console.log('   1. Open public/og-cover.svg in a browser');
    console.log('   2. Screenshot or export as PNG (1200x630)');
    console.log('   3. Save as public/og-cover.png');
  }
}

createOGImage();
