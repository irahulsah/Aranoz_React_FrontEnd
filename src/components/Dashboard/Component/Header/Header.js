import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Badge,
  InputBase,
  makeStyles,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ChatIcon from "@material-ui/icons/Chat";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const Header = ({ logout }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      background: "#fff",
      transform: "translateZ(0)",
    },
    searchInput: {
      opacity: "0.6",
      padding: `0px ${theme.spacing(1)}px`,
      fontSize: "0.8rem",
      "&:hover": {
        background: "#f2f2f2",
      },
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(1),
      },
    },
    shape: {},
    // overrides: {
    //   transform: "trasnalteZ(0)",
    // },
  }));
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container align-items="center">
          <Grid item>
            <InputBase
              placeholder="Search Topics"
              className={classes.searchInput}
              startAdornment={<SearchIcon />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Link to="/">
                <HomeIcon />
              </Link>
            </IconButton>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatIcon />
              </Badge>
            </IconButton>

            <Link to="/" onClick={logout}>
              <IconButton disableRipple>
                <PowerSettingsNewIcon />
              </IconButton>
            </Link>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
