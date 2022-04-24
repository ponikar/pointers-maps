const { Server, Socket } = require("socket.io");
const express = require("express");
const http = require("http");
const app = express();

app.get("/testing", (req, res) => {
  return res.json({ message: "Working!" });
});
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

server.listen(process.env.PORT || 8000, () => {
  console.log("The application is listening on port 8000!");
});

io.on("connection", (socket) => {
  socket.on("pointer", (e) => {
    socket.broadcast.emit(`pointer`, { ...e, socketId: socket.id });
  });

  socket.on("map_changed", (e) => {
    socket.broadcast.emit("on_map_changed", e);
  });

  socket.on("disconnecting", (reason) => {
    socket.broadcast.emit("pointer_left", socket.id);
  });
  socket.on("disconnect", (e) => {
    console.log("SOMEONE DISCONNECTED", e);
  });
});
