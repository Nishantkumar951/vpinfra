import { Jimp } from 'jimp';

async function check() {
  try {
    const image = await Jimp.read('public/images/logo.png');
    console.log(`Width: ${image.width}, Height: ${image.height}`);
  } catch (err) {
    console.error(err);
  }
}

check();
