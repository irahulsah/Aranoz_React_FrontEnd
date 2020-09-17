import React from "react";
import { Button as MuiButton, makeStyles } from "@material-ui/core";

const Button = ({ text, size, variant, onClick, color, ...other }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(0.5),
    },
    label: {
      texrTransform: "none",
    },
  }));
  const classes = useStyles();
  return (
    <MuiButton
      color={color || "primary"}
      size={size || "large"}
      variant={variant || "contained"}
      onClick={onClick}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
