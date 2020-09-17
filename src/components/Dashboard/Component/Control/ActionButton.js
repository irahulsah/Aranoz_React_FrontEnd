import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const ActionButton = ({ children, color, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(0.5),
    },
    secondary: {
      background: "#ffe6e6",
      "& .MuiButton-label": {
        color: theme.palette.secondary.main,
      },
    },
    primary: {
      backgroundColor: "#e6ecff",
      "& .MuiButton-label": {
        color: theme.palette.primary.main,
      },
    },
  }));
  const classes = useStyles();
  return (
    <Button className={`${classes.root} ${classes[color]}`} onClick={onClick}>
      {children}
    </Button>
  );
};

export default ActionButton;
