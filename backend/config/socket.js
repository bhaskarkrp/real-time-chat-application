const socket = require("socket.io");
var io;

exports.connectSocket = (server) => {
  console.log("Connecting to socket");
  io = socket(server, {
    cors: {
      origin: "*",
    },
  });
  // Establish the connection with socket
  io.on("connection", (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);

    socket.on("disconnect", () => {
      console.log("🔥: A user disconnected");
    });
  });
};

exports.broadcastEvent = (event, data) => {
  io.emit(event, data);
};
