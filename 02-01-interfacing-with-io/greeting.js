process.stdin.on("data", handleStdIn);

function handleStdIn(data) {
    const name = data.toString().trim().toUpperCase();

    if (!name) {
        process.stderr.write("Unsupported input");
    } else {
        process.stdout.write(`Hello ${name}!`);
    }
}
