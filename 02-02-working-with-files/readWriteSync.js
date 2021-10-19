const fs = require("fs");
const path = require("path");

const ENCODING = "utf8";
const FILE_NAME = "hello.txt";

const filePath = path.join(__dirname, FILE_NAME);

const fileContent = fs.readFileSync(filePath, ENCODING);
console.log("file content:", fileContent);

const updatedContent = fileContent.toUpperCase();
fs.writeFileSync(filePath, updatedContent, ENCODING);
console.log("file updated");
