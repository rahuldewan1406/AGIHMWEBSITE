const fs = require('node:fs');
const path = require('node:path');

const requiredFiles = [
  'index.html',
  'styles.css',
  'script.js',
  'Dockerfile',
  'nginx.conf',
  'package.json'
];

const root = path.join(__dirname, '..');

for (const file of requiredFiles) {
  const resolved = path.join(root, file);
  if (!fs.existsSync(resolved)) {
    throw new Error(`Missing required file: ${file}`);
  }
}

console.log('Build checks passed: required AGIHM site files found.');
