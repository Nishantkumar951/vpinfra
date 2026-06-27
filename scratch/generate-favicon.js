import { Jimp } from 'jimp';
import fs from 'fs';

async function generate() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    
    // Scale and pad the image to fit a 192x192 canvas
    image.contain({ w: 192, h: 192 });
    await image.write('public/favicon.png');
    console.log('Saved 192x192 favicon.png successfully!');
    
    // Create a 48x48 version
    const smallImage = image.clone().resize({ w: 48, h: 48 });
    const buffer = await smallImage.getBuffer('image/png');
    
    // Write buffer directly to favicon.ico
    fs.writeFileSync('public/favicon.ico', buffer);
    console.log('Saved 48x48 favicon.ico successfully!');
  } catch (err) {
    console.error('Error generating favicon:', err);
  }
}

generate();
