import React from "react";
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const PageHeader = ({ icon, title, description }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#fdfdff",
    },
    PageHeader: {
      padding: theme.spacing(4),
      display: "flex",
      marginBottom: theme.spacing(2),
    },
    pageIcon: {
      padding: theme.spacing(2),
      display: "inline-block",
      color: "#3c44b1",
    },
    pageTitle: {
      paddingLeft: theme.spacing(4),
      "& .MuiTypography-subtitle2": {
        opacity: "0.6",
      },
    },
  }));

  const classes = useStyles();
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.PageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {description}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
