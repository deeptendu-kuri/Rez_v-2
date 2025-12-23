const fs = require('fs');
const path = require('path');

const pagesDir = '/Users/rejaulkarim/Documents/ReZ V 2/rez-app/src/pages';

// Get all .jsx files recursively
function getAllJsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllJsxFiles(fullPath));
    } else if (item.endsWith('.jsx') && !item.includes('.bak')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Fix a single file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;
  let changeCount = 0;

  // Patterns to replace
  const replacements = [
    // text-white fixes
    { pattern: /className="([^"]*?)text-white(\s)/g, replacement: 'className="$1text-rez-navy dark:text-white$2' },
    { pattern: /className='([^']*?)text-white(\s)/g, replacement: "className='$1text-rez-navy dark:text-white$2" },
    { pattern: /className=`([^`]*?)text-white(\s)/g, replacement: 'className=`$1text-rez-navy dark:text-white$2' },
    { pattern: /className="([^"]*?)text-white"/g, replacement: 'className="$1text-rez-navy dark:text-white"' },
    { pattern: /className='([^']*?)text-white'/g, replacement: "className='$1text-rez-navy dark:text-white'" },
    { pattern: /className=`([^`]*?)text-white`/g, replacement: 'className=`$1text-rez-navy dark:text-white`' },

    // text-gray-300 fixes
    { pattern: /className="([^"]*?)text-gray-300(\s)/g, replacement: 'className="$1text-rez-gray-700 dark:text-gray-300$2' },
    { pattern: /className='([^']*?)text-gray-300(\s)/g, replacement: "className='$1text-rez-gray-700 dark:text-gray-300$2" },
    { pattern: /className="([^"]*?)text-gray-300"/g, replacement: 'className="$1text-rez-gray-700 dark:text-gray-300"' },

    // text-gray-400 fixes
    { pattern: /className="([^"]*?)text-gray-400(\s)/g, replacement: 'className="$1text-rez-gray-600 dark:text-gray-400$2' },
    { pattern: /className='([^']*?)text-gray-400(\s)/g, replacement: "className='$1text-rez-gray-600 dark:text-gray-400$2" },
    { pattern: /className="([^"]*?)text-gray-400"/g, replacement: 'className="$1text-rez-gray-600 dark:text-gray-400"' },

    // bg-white/10 fixes
    { pattern: /className="([^"]*?)bg-white\/10(\s)/g, replacement: 'className="$1bg-rez-gray-100 dark:bg-white/10$2' },
    { pattern: /className='([^']*?)bg-white\/10(\s)/g, replacement: "className='$1bg-rez-gray-100 dark:bg-white/10$2" },
    { pattern: /className="([^"]*?)bg-white\/10"/g, replacement: 'className="$1bg-rez-gray-100 dark:bg-white/10"' },

    // bg-white/5 fixes
    { pattern: /className="([^"]*?)bg-white\/5(\s)/g, replacement: 'className="$1bg-rez-gray-50 dark:bg-white/5$2' },
    { pattern: /className='([^']*?)bg-white\/5(\s)/g, replacement: "className='$1bg-rez-gray-50 dark:bg-white/5$2" },
    { pattern: /className="([^"]*?)bg-white\/5"/g, replacement: 'className="$1bg-rez-gray-50 dark:bg-white/5"' },

    // border-white/10 fixes
    { pattern: /className="([^"]*?)border-white\/10(\s)/g, replacement: 'className="$1border-rez-gray-200 dark:border-white/10$2' },
    { pattern: /className='([^']*?)border-white\/10(\s)/g, replacement: "className='$1border-rez-gray-200 dark:border-white/10$2" },
    { pattern: /className="([^"]*?)border-white\/10"/g, replacement: 'className="$1border-rez-gray-200 dark:border-white/10"' },
  ];

  // Apply each replacement
  for (const { pattern, replacement } of replacements) {
    const beforeCount = (content.match(pattern) || []).length;
    content = content.replace(pattern, replacement);
    const afterCount = (content.match(pattern) || []).length;
    changeCount += (beforeCount - afterCount);
  }

  // Write file if changed
  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    return { changed: true, changeCount };
  }

  return { changed: false, changeCount: 0 };
}

// Main execution
console.log('Finding all .jsx files...');
const files = getAllJsxFiles(pagesDir);
console.log(`Found ${files.length} .jsx files\n`);

let totalChanged = 0;
let totalReplacements = 0;

files.forEach((file) => {
  const relativePath = path.relative(pagesDir, file);
  const result = fixFile(file);

  if (result.changed) {
    totalChanged++;
    totalReplacements += result.changeCount;
    console.log(`✓ ${relativePath} (${result.changeCount} changes)`);
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`SUMMARY:`);
console.log(`  Total files processed: ${files.length}`);
console.log(`  Files changed: ${totalChanged}`);
console.log(`  Total replacements: ${totalReplacements}`);
console.log(`${'='.repeat(60)}`);
