const fs = require('fs');

console.log('--- BOOK PATHS ---');
console.log(fs.readFileSync('public/assets/decorative/doodle-book.svg', 'utf8'));

console.log('--- SLIDE PATHS ---');
console.log(fs.readFileSync('public/assets/decorative/doodle-slide.svg', 'utf8'));

console.log('--- BUS PATHS ---');
console.log(fs.readFileSync('public/assets/decorative/doodle-bus.svg', 'utf8'));
