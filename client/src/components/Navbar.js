import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";



const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
});

class Navbar extends React.Component {
  state = {
    anchorel: null,
    mobileMoreAnchorEl: null
  };

  handleMenuClose = () => {
    this.setState({ anchorel: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorel, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorel);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMobileMenu = (
      <Menu
        anchorel={mobileMoreAnchorEl}
        anchororigin={{ vertical: "top", horizontal: "left" }}
        transformorigin={{ vertical: "top", horizontal: "left" }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <a href="/events">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="/about">About</a>
        </MenuItem>
        <MenuItem>
          <a href="/skills">Skills</a>
        </MenuItem>
        <MenuItem>
          <a href="/projects">Projects</a>
        </MenuItem>
        <MenuItem>
          <a href="/resume">Resume</a>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="static"
          color="primary"
          elevation={1}
          className="navbar"
        >
          <Toolbar>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <p className="font-style-menu">CS</p>
            </Typography>
            <Toolbar 
              className={classes.sectionDesktop}
              anchorel={null}
              anchororigin={{ vertical: "top", horizontal: "left" }}
              transformo
              rigin={{ vertical: "top", horizontal: "left" }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
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
              <a href="/resume">
                <Button color="inherit">Resume</Button>
              </a>
            </Toolbar>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
