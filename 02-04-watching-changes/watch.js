const fs = require("fs");

const file = process.argv[2];

console.log(`${file}: waiting for changes...`);
fs.watchFile(file, (current) => console.log(`${file} was updated at ${current.mtime}`));

// The .watchFile method uses interval polling for getting info about files and compares states 