import React, { useState, useEffect } from "react";
import { ServerConnection } from "./components/server-connection";
import socketIOClient from "socket.io-client";
import { Start } from "./components/start";
import { Main } from "./components/main";
import { End } from "./components/end";
import "./App.scss";

export const App = () => {
  // const [server, setServer] = useState(null);
  const server = socketIOClient("/");
  const [gameData, setgameData] = useState(null);
  const [player, setPlayer] = useState(null);
  const [roomName, setRoomName] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [endResults, setEndResults] = useState(null);

  //Game Started Handler
  useEffect(() => {
    server &&
      server.on("gameStarted", (data) => {
        setgameData(data.gameData);
        setPlayer(data.player);
        setRoomName(data.roomName);
      });
  }, [server]);

  //Second Player Joined Handler
  useEffect(() => {
    server &&
      server.on("playerJoined", (data) => {
        setGameStarted(true);
      });
  }, [server]);

  //Game changes handler
  useEffect(() => {
    server &&
      server.on("gameChange", (data) => {
        setgameData(data.gameData);
      });
  }, [server]);

  //Game end handler
  useEffect(() => {
    server &&
      server.on("endGame", (data) => {
        setEndResults(data.results);
      });
  }, [server]);

  const restartGame = () => {
    setgameData(null);
    setPlayer(null);
    setRoomName(null);
    setGameStarted(false);
    setEndResults(null);
  };

  return (
    <div className="app">
      {/* {!server && <ServerConnection setServer={setServer} />} */}
      {server && !gameData && (
        <Start server={server} setgameData={setgameData} />
      )}
      {gameData && server && !endResults && (
        <Main
          gameData={gameData}
          server={server}
          player={player}
          gameStarted={gameStarted}
          roomName={roomName}
          restartGame={restartGame}
        />
      )}
      {endResults && <End endResults={endResults} restartGame={restartGame} />}
    </div>
  );
};
