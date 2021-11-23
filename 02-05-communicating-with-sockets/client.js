process.stdin.on("data", handleStdIn);

console.log("What's your name?");

function handleStdIn(name) {
    const net = require("net");

    const PORT = 3000;
    const HOST_NAME = "localhost";

    const socket = net.connect(PORT, HOST_NAME);

    socket.on("data", (message) => {
        console.log(message.toString());
        socket.destroy();
    });

    socket.write(name);
}
