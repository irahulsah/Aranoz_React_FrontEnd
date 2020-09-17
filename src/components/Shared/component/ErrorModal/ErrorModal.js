import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Button from "../../../Dashboard/Component/Control/Button";
const ErrorModal = ({ errorModal, setErrorModal, clearError }) => {
  // console.log(ErrorModal);

  const useStyles = makeStyles((theme) => ({
    dialog: {
      padding: theme.spacing(2),
      position: "absolute",
      top: theme.spacing(5),
    },
    dialogContent: {
      textAlign: "center",
    },
    dialogTitle: {
      textAlign: "center",
    },
    dialogAction: {
      justifyContent: "center",
    },
    titleIcon: {
      backgroundColor: "#ffe6e6",
      color: theme.palette.secondary.main,
    },
  }));
  // console.log(ErrorModal);
  const classes = useStyles();
  return (
    <Dialog open={errorModal.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <ErrorIcon className={classes.titleIcon} style={{ fontSize: "8rem" }} />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{errorModal.title}</Typography>
        <Typography variant="subtitle1">{errorModal.content}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          text="Cancel"
          color="default"
          onClick={() => {
            setErrorModal({ isOpen: false, title: "", content: "" });
            clearError();
          }}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ErrorModal;
