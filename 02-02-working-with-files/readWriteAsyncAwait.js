const fs = require("fs").promises;
const path = require("path");

const ENCODING = "utf8";
const FILE_NAME = "hello.txt";

const filePath = path.join(__dirname, FILE_NAME);

async function run() {
    try {
        const content = await fs.readFile(filePath, ENCODING);
        console.log("file content:", content);
    } catch (e) {
        console.error(e);
    }
}

run();
