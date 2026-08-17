const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(projectRoot, 'styles.css'), 'utf8');
const js = fs.readFileSync(path.join(projectRoot, 'script.js'), 'utf8');

test('website contains AGIHM branding and required contact details', () => {
  assert.match(html, /AGIHM/i);
  assert.match(html, /info@agihm\.in/i);
  assert.match(html, /\+91 8219006115/i);
});

test('critical sections exist in markup', () => {
  assert.match(html, /id="home"/i);
  assert.match(html, /id="programs"/i);
  assert.match(html, /id="placements"/i);
  assert.match(html, /id="contact"/i);
});

test('security headers and responsive styling are present', () => {
  assert.match(html, /Content-Security-Policy/i);
  assert.match(css, /@media \(max-width: 760px\)/i);
  assert.match(js, /IntersectionObserver/i);
});
