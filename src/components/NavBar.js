import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import logo from "../assets/fingerprint.svg";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  barStyle: {
    background: "black"
  }
});

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.barStyle} position="static" color="default">
        <Toolbar>
          <Grid container spacing={3}>
            <Grid item xs />
            <Grid item xs>
              <img src={logo} alt="Logo" />
            </Grid>
            <Grid item xs />
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}