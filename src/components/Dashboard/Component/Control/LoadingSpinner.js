import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    justifyItems: "center",
    alignItems: "center",
    paddingTop: theme.spacing(3),
  },
}));
export default function LoadingSpinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
      {/* <CircularProgress color="secondary"  /> */}
    </div>
  );
}
