const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = (module.exports.io = require("socket.io")(server));
const shortid = require("shortid");
const data = require("./data.json");
const cloneDeep = require("clone-deep");

const PORT = process.env.PORT || 5000;
const state = {};
const clientRooms = {};

app.use(express.static(__dirname + "/../../build"));

io.on("connection", (client) => {
  const handleNewGame = (clientID) => {
    let roomName = shortid.generate();
    clientRooms[clientID] = roomName;
    state[roomName] = cloneDeep(data);
    client.join(roomName);
    client.number = 1;

    client.emit("gameStarted", {
      gameData: state[roomName],
      player: 1,
      roomName: roomName,
    });
  };

  const handleJoinGame = (data) => {
    if (!io.sockets.adapter.rooms[data.roomName]) return;
    clientRooms[data.clientID] = data.roomName;
    client.join(data.roomName);
    client.number = 2;
    client.emit("gameStarted", {
      gameData: state[data.roomName],
      player: 2,
      roomName: data.roomName,
    });

    io.sockets.in(data.roomName).emit("playerJoined");
  };

  const handleGameChange = (change) => {
    const roomName = clientRooms[change.clientID];
    state[roomName].boxes[change.key].owner = change.player;
    const endGameResults = handleEndGame(state[roomName].boxes);

    if (endGameResults) {
      io.sockets.in(roomName).emit("endGame", {
        results: endGameResults,
      });
    } else {
      io.sockets.in(roomName).emit("gameChange", {
        gameData: state[roomName],
      });
    }
  };

  const handleEndGame = (boxes) => {
    const remainingBoxes = boxes.filter((el) => el.owner === 0);
    if (remainingBoxes.length) return false;
    return calculateResult(boxes);
  };

  const calculateResult = (boxes) => {
    const result = {};
    for (const box of boxes) {
      result[box.owner] = (result[box.owner] || 0) + 1;
    }
    return result;
  };

  client.on("newGame", handleNewGame);
  client.on("joinGame", handleJoinGame);
  client.on("gameChange", handleGameChange);
});

// io.listen(port);

server.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});
