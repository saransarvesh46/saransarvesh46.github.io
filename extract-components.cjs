const fs = require('fs');
const path = require('path');

const pillNavJson = JSON.parse(fs.readFileSync('pillnav.json', 'utf8'));
const scrollStackJson = JSON.parse(fs.readFileSync('scrollstack.json', 'utf8'));

fs.mkdirSync('src/components/PillNav', { recursive: true });
fs.writeFileSync('src/components/PillNav/PillNav.jsx', pillNavJson.files[0].content);

fs.mkdirSync('src/components/ScrollStack', { recursive: true });
fs.writeFileSync('src/components/ScrollStack/ScrollStack.jsx', scrollStackJson.files[0].content);

console.log('Components extracted successfully.');
