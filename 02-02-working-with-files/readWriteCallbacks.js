const fs = require("fs");
const path = require("path");

const ENCODING = "utf8";
const FILE_NAME = "hello.txt";

const filePath = path.join(__dirname, FILE_NAME);

fs.readFile(filePath, ENCODING, (err, content) => {
    if (err) {
        return console.error(err);
    }

    console.log("file content:", content);
    const upperContent = content.toUpperCase();

    updateFile(upperContent);
});

function updateFile(content) {
    fs.writeFile(filePath, content, ENCODING, (err) => {
        if (err) {
            return console.error(err);
        }

        console.log("file updated");
    });
}

setInterval(() => process.stdout.write("**** \n"), 1).unref();