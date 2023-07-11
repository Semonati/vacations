const { Server } = require("socket.io");

let users = [];

const getIoServer = (server) => {
  const io = new Server({
    cors: {
      origin: "http://localhost:3000",
    },
  });

  io.on("connection", (socket) => {

    socket.on("newUser", (userId) => {
      addUser(userId, socket.id);
    });

    socket.on("sendNotification", ({ userId, fullName, status }) => {
      const user = getUser(userId);
      io.to(user.socketId).emit("getNotification", {
        fullName,
        status
      });
    });

    socket.on("disconnect", () => {
      removeUser(socket.id);
    });
  });

  io.listen(server);
};

const addUser = (userId, socketId) => {
  !users.some((user) => user._id === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  const user = users.find((user) => {
    if (user.userId === userId) {
      return user;
    }
  });
  return user;
};

exports.getIoServer = getIoServer;
