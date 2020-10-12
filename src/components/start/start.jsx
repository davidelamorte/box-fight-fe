import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import styles from "./start.module.scss";
import { Canvas } from "react-three-fiber";
import { softShadows } from "drei";
import { Box } from "../box";

softShadows();

export const Start = ({ server, clientID }) => {
  const [gameCode, setGameCode] = useState(null);

  const onNewGameClick = () => {
    server.emit("newGame", clientID);
  };

  const onJoinGameClick = () => {
    server.emit("joinGame", {
      roomName: gameCode,
      clientID: clientID,
    });
  };

  const handleChange = (event) => {
    setGameCode(event.target.value);
  };

  return (
    <>
      <div className={styles.start}>
        <div className={styles.title}>
          BOX <strong>FIGHT</strong>
        </div>
        <Button
          className={styles.button}
          onClick={onNewGameClick}
          variant="contained"
          color="secondary"
        >
          New Game
        </Button>
        <div className={styles.join}>
          <TextField
            onChange={handleChange}
            id="standard-basic"
            label="Game Code"
          />
          <Button
            className={styles.button2}
            onClick={onJoinGameClick}
            variant="contained"
            color="primary"
          >
            Join Game
          </Button>
        </div>
      </div>
      {/* 3D SCENE */}
      <Canvas
        className={styles.canvas}
        shadowMap
        colorManagement
        camera={{ position: [0, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, -0]} intensity={1.5} />
        <Box position={[4, 0, 1]} color="#03a9f4" speed={5} />
        <Box position={[-4, 0, 1]} color="#f50057" speed={5} />
        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
        </group>
      </Canvas>
    </>
  );
};
