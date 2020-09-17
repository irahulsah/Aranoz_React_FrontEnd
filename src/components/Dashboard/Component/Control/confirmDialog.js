import React from "react";
import {
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  DialogTitle,
  makeStyles,
} from "@material-ui/core";
import NotListedLocationIcon from "@material-ui/icons/NotListedLocation";
import Button from "../../Component/Control/Button";
const ConfirmDialog = ({ confirmDialog, onClick, setConfirmDialog }) => {
  // console.log(confirmDialog);
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
      "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        cursor: "default",
      },
    },
  }));
  // console.log(confirmDialog);
  const classes = useStyles();
  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle className={classes.dialogTitle}>
        <NotListedLocationIcon
          className={classes.titleIcon}
          style={{ fontSize: "8rem" }}
        />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="h6">{confirmDialog.title}</Typography>
        <Typography variant="subtitle1">{confirmDialog.content}</Typography>
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Button
          text="No"
          color="default"
          onClick={() =>
            setConfirmDialog({ isOpen: false, title: "", content: "" })
          }
        />
        <Button
          text="Yes"
          color="secondary"
          onClick={confirmDialog.onConfirm}
        />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
