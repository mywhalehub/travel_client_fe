const fs = require('fs');
const path = require('path');

const targetDirs = [
  path.join(__dirname, '..', 'app'),
  path.join(__dirname, '..', 'components')
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith('.tsx')) {
      results.push(fullPath);
    }
  });
  return results;
}

let files = [];
targetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    files = files.concat(walk(dir));
  }
});

console.log(`Found ${files.length} tsx files. Processing...`);

files.forEach(filepath => {
  let originalContent = fs.readFileSync(filepath, 'utf8');
  let content = originalContent;

  // 1. Temporarily replace any existing 'rounded-xl' to a unique placeholder to avoid double replacement
  content = content.replace(/rounded-xl/g, 'TEMP_ROUNDED_LG');

  // 2. Replace the high-rounding classes with 'rounded-xl'
  content = content.replace(/rounded-3xl/g, 'rounded-xl');
  content = content.replace(/rounded-2xl/g, 'rounded-xl');
  content = content.replace(/rounded-\[28px\]/g, 'rounded-xl');
  content = content.replace(/rounded-\[24px\]/g, 'rounded-xl');
  content = content.replace(/rounded-\[20px\]/g, 'rounded-xl');
  content = content.replace(/rounded-t-\[32px\]/g, 'rounded-t-xl');
  content = content.replace(/rounded-t-3xl/g, 'rounded-t-xl');
  content = content.replace(/rounded-t-2xl/g, 'rounded-t-xl');

  // 3. Convert the placeholder to 'rounded-lg'
  content = content.replace(/TEMP_ROUNDED_LG/g, 'rounded-lg');

  if (originalContent !== content) {
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Updated: ${path.relative(path.join(__dirname, '..'), filepath)}`);
  }
});

console.log('All files processed successfully.');
