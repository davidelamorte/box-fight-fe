import React, { useState } from "react";
import socketIOClient from "socket.io-client";
import { Button, TextField } from "@material-ui/core";
import styles from "./server-connection.module.scss";

export const ServerConnection = ({ setServer }) => {
  const [serverURL, setServerURL] = useState(null);

  const handleChange = (event) => {
    setServerURL(event.target.value);
  };

  const onClick = () => {
    if (serverURL) setServer(socketIOClient(serverURL));
  };

  return (
    <div className={styles.serverConnection}>
      <div className={styles.title}>Connect to Server</div>
      <form noValidate autoComplete="off">
        <TextField onChange={handleChange} label="Server URL" />
      </form>
      <Button
        className={styles.button}
        onClick={onClick}
        variant="contained"
        color="secondary"
      >
        Connect
      </Button>
    </div>
  );
};
