const fs = require('fs');

['doodle-book.svg', 'doodle-slide.svg', 'doodle-bus.svg'].forEach(name => {
  const filePath = 'public/assets/decorative/' + name;
  let content = fs.readFileSync(filePath, 'utf8');
  if (!content.includes('fill="currentColor"')) {
    content = content.replace('<svg ', '<svg fill="currentColor" ');
    fs.writeFileSync(filePath, content);
    console.log(`Added fill="currentColor" to ${name}`);
  }
});
