const fs = require("fs");

const file = process.argv[2];

console.log(`${file}: waiting for changes...`);
fs.watch(file, (eventType, filename) => console.log(`${filename} was updated`));

// The .watch method uses operation system API for getting info about file changes
// It allows to also watch directories
