const net = require("net");

const HOST_NAME = "localhost";
const PORT = 3000;

const connectionListener = (socket) => {
    const CONNECTION_ID = Math.round(Math.random() * 100000);

    console.log(`Connection #${CONNECTION_ID} established`);

    socket.on("data", (data) => {
        socket.write(`hello ${data.toString()}`);
    });

    socket.on("close", () => {
        console.log(`Connection #${CONNECTION_ID} closed`);
    });
};

net.createServer(connectionListener).listen(PORT, HOST_NAME);
