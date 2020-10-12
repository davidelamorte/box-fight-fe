import React from "react";
import { Canvas } from "react-three-fiber";
import { Box } from "../box";
import { OrbitControls, Html } from "drei";
import styles from "./main.module.scss";

export const Main = ({
  gameData,
  server,
  player,
  gameStarted,
  roomName,
  restartGame,
}) => {
  const onBoxClick = (key) => {
    if (gameStarted) {
      server.emit("gameChange", {
        key: key,
        player: player,
      });
    }
  };

  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 3, 10], fov: 100 }}>
        <directionalLight castShadow position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, -0]} intensity={1.5} />
        {gameData &&
          gameData.boxes.map((el, key) => {
            return (
              <Box
                key={key}
                position={el.position}
                color={gameData.colors[el.owner]}
                speed={6}
                onClick={() => onBoxClick(key)}
                expand={el.owner === player}
              />
            );
          })}
        {!gameStarted && (
          <Html>
            <div className={styles.main}>
              <div className={styles.waiting}>
                Room name: <strong>{roomName}</strong>. Waiting for player 2.
                <div onClick={restartGame} className={styles.goBack}>
                  Go Back.
                </div>
              </div>
            </div>
          </Html>
        )}
        {gameStarted && <OrbitControls />}
      </Canvas>
    </>
  );
};
