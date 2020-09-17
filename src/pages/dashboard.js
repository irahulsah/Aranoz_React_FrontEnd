import React, { useContext } from "react";

import Employees from "../components/Dashboard/pages/Employees/Employees";
import SideBar from "../components/Dashboard/Component/SideBar/SideBar";
import Header from "../components/Dashboard/Component/Header/Header";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
  CssBaseline,
} from "@material-ui/core";
import { AuthContext } from "../components/Shared/context/AuthContext";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#f4f5fd",
    },
  },
  shape: {
    borderRadius: "12px",
  },
});
const Dashboard = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const useStyles = makeStyles({
    appMain: {
      paddingLeft: "320px",
      width: "100%",
    },
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideBar />
      <div className={classes.appMain}>
        <Header isLoggedIn={isLoggedIn} logout={logout} />
        <Employees />{" "}
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default Dashboard;
