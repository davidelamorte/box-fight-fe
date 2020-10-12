import React from "react";
import { Button } from "@material-ui/core";
import styles from "./end.module.scss";

export const End = ({ endResults, restartGame }) => {
  return (
    <div className={styles.end}>
      <div className={styles.playerOne}>
        <strong>Player One:</strong> {endResults[1]}
      </div>
      <div className={styles.playerTwo}>
        <strong>Player Two:</strong> {endResults[2]}
      </div>
      <Button
        className={styles.button}
        onClick={restartGame}
        variant="contained"
        color="secondary"
      >
        Restart
      </Button>
    </div>
  );
};
