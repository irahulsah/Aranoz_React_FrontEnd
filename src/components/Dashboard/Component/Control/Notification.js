import React from "react";
import { Alert } from "@material-ui/lab";
import { Snackbar, makeStyles } from "@material-ui/core";

const NotiFication = ({ notify, setNotify }) => {
  // console.log(notify);
  const useStyles = makeStyles((theme) => ({
    root: {
      top: theme.spacing(9),
    },
  }));
  const handleClose = (event, reason) => {
    setNotify({ ...notify, isOpen: false });
  };
  const classes = useStyles();
  return (
    <Snackbar
      open={notify.isOpen}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={handleClose}
      className={classes.root}
    >
      <Alert severity={notify.type} onClose={handleClose}>
        {notify.message}
      </Alert>
    </Snackbar>
  );
};

export default NotiFication;
