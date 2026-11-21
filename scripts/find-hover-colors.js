const fs = require('fs');
const path = require('path');

function inspectFolder(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) {
      if (f !== 'node_modules' && f !== '.next' && f !== '.git' && f !== 'out') inspectFolder(full);
    } else if (f.endsWith('.tsx') || f.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/(?:hover:|group-hover:)[^\s"'{}`<>]+/g);
      if (matches) {
        const unique = [...new Set(matches)];
        unique.forEach(m => {
          if (
            m.includes('red') ||
            m.includes('rose') ||
            m.includes('pink') ||
            m.includes('primary') ||
            m.includes('secondary') ||
            m.includes('tertiary') ||
            m.includes('accent') ||
            m.includes('peach') ||
            m.includes('coral') ||
            m.includes('orange') ||
            m.includes('color') ||
            m.includes('bg-[') ||
            m.includes('text-[') ||
            m.includes('border-[')
          ) {
            console.log(full, m);
          }
        });
      }
    }
  }
}

inspectFolder('src');
