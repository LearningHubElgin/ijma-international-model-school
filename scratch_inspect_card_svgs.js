const fs = require('fs');

['doodle-book.svg', 'doodle-slide.svg', 'doodle-bus.svg'].forEach(name => {
  const content = fs.readFileSync('public/assets/decorative/' + name, 'utf8');
  console.log(`\n=== ${name} ===`);
  console.log(content.substring(0, 400));
});
