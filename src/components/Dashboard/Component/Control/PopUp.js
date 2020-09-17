import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";

import ActionButton from "./ActionButton";

const PopUp = ({ title, children, openPopUp, setOpenPopUp }) => {
  const useStyles = makeStyles((theme) => ({
    dialogWrapper: {
      padding: theme.spacing(2),
      position: "absolute",
      top: theme.spacing(5),
    },
    dialogTitle: {
      paddingRight: "0px",
    },
  }));
  const classes = useStyles();
  return (
    <Dialog
      classes={{ paper: classes.dialogWrapper }}
      open={openPopUp}
      maxWidth="md"
    >
      <DialogTitle className={classes.dialogTitle}>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ActionButton color="secondary" onClick={() => setOpenPopUp(false)}>
            {" "}
            <Close />{" "}
          </ActionButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default PopUp;
