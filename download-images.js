const https = require('https');
const fs = require('fs');
const path = require('path');

// Create customers directory if it doesn't exist
const customersDir = path.join(__dirname, 'public', 'assets', 'img', 'customers');
if (!fs.existsSync(customersDir)) {
  fs.mkdirSync(customersDir, { recursive: true });
}

// Professional customer images from Unsplash (free to use)
const images = [
  {
    name: 'sarah-johnson.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'michael-chen.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'emma-rodriguez.jpg',
    url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'david-thompson.jpg',
    url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'lisa-wang.jpg',
    url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'robert-martinez.jpg',
    url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'jennifer-adams.jpg',
    url: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
  },
  {
    name: 'james-wilson.jpg',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
  }
];

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filepath = path.join(customersDir, filename);
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        const fileStream = fs.createWriteStream(filepath);
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✅ Downloaded: ${filename}`);
          resolve();
        });
        
        fileStream.on('error', (err) => {
          fs.unlink(filepath, () => {}); // Delete the file if there was an error
          reject(err);
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadAllImages() {
  console.log('🚀 Starting download of professional customer images...\n');
  
  for (const image of images) {
    try {
      await downloadImage(image.url, image.name);
    } catch (error) {
      console.error(`❌ Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('\n✨ Download complete!');
  console.log(`📁 Images saved to: ${customersDir}`);
  console.log('\n📝 Next steps:');
  console.log('1. Check the downloaded images');
  console.log('2. Restart your development server');
  console.log('3. The testimonials should now show professional customer photos');
}

// Run the download
downloadAllImages().catch(console.error); 