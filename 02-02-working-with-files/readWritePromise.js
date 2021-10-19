const fs = require("fs").promises;
const path = require("path");

const ENCODING = "utf8";
const FILE_NAME = "hello.txt";

const filePath = path.join(__dirname, FILE_NAME);

fs.readFile(filePath, ENCODING)
    .then((content) => console.log(content))
    .catch((err) => console.error(err));
