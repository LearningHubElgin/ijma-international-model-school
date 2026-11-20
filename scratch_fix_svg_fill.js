const fs = require('fs');

['doodle-book.svg', 'doodle-slide.svg', 'doodle-bus.svg'].forEach(name => {
  const filePath = 'public/assets/decorative/' + name;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/fill="[^"]*"/g, '');
  content = content.replace('<svg ', '<svg fill="#1CBBB4" ');
  fs.writeFileSync(filePath, content);
  console.log(`Set fill="#1CBBB4" in ${name}`);
});
