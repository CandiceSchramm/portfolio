import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }


};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <AppBar position="static" color="primary" elevation={1} className="navbar"> 
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            .
          </Typography>
          <a href="/">
            <Button color="inherit">Home</Button>
          </a>
          <a href="/about">
            <Button color="inherit">About</Button>
          </a>
          <a href="/skills">
            <Button color="inherit">Skills</Button>
          </a>
          <a href="/projects">
            <Button color="inherit">Projects</Button>
          </a>
          <Button color="inherit">Resume</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
