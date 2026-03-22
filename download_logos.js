const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public', 'tools');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
}

const tools = [
  { name: 'Linear', url: 'https://cdn.simpleicons.org/linear' },
  { name: 'Jira', url: 'https://cdn.simpleicons.org/jira' },
  { name: 'Github', url: 'https://cdn.simpleicons.org/github' },
  { name: 'Figma', url: 'https://cdn.simpleicons.org/figma' },
  { name: 'Confluence', url: 'https://cdn.simpleicons.org/confluence' },
  { name: 'Mural', url: 'https://cdn.simpleicons.org/mural' },
  { name: 'Cursor', url: 'https://logo.clearbit.com/cursor.com' },
  { name: 'Eraser.io', url: 'https://logo.clearbit.com/eraser.io' },
  { name: 'GanttPRO', url: 'https://logo.clearbit.com/ganttpro.com' },
  { name: 'MS Project', url: 'https://logo.clearbit.com/microsoft.com' }
];

const download = (url, filename) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 200 || res.statusCode === 301 || res.statusCode === 302) {
        if(res.statusCode === 301 || res.statusCode === 302) {
           https.get(res.headers.location, (redirectRes) => {
               const file = fs.createWriteStream(filename);
               redirectRes.pipe(file);
               file.on('finish', () => { file.close(); resolve(); });
           })
        } else {
            const file = fs.createWriteStream(filename);
            res.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve();
            });
        }
      } else {
        console.log(`Failed to download ${url}: ${res.statusCode}`);
        resolve();
      }
    }).on('error', (err) => {
      console.log(`Error on ${url}: ${err.message}`);
      resolve();
    });
  });
};

async function run() {
  for (const tool of tools) {
     const ext = tool.url.includes('.svg') || tool.url.includes('simpleicons') ? '.svg' : '.png';
     const fileName = tool.name.toLowerCase().replace(/[\s.]/g, '-') + ext;
     console.log(`Downloading ${fileName}...`);
     await download(tool.url, path.join(publicDir, fileName));
  }
  console.log("Done");
}

run();
