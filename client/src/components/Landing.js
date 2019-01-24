import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import GithubIcon from "./GithubIcon";
import LinkedinIcon from "./LinkedinIcon";
import GooglePlusIcon from "./GooglePlusIcon";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  paper: {
    minHeight: "30vh",
    marginTop: "5vh",
    padding: "6vh"
  },
  socialButtons: {
    marginTop: "8vh"
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="center-item"
    >
      <Grid item sm={8}>
        <Paper className={classes.root && classes.paper} elevation={8}>
          <Grid
            container
            spacing={8}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={3}>
              <p className="intro">Hello World!</p>
            </Grid>
            <Grid item sm={9}>
              <Typography variant="subheading" color="primary">
                Full Stack Web Developement by
              </Typography>
              <div className="font-style-title" style={{ paddingBottom: 0 }}>
                Candice Schramm
              </div>
            </Grid>
            <Grid item sm={12}>
              <Grid
                container
                spacing={8}
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item sm={4} className={classes.socialButtons}>
                  <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <GooglePlusIcon/>
                  </Fab>
                  <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <LinkedinIcon/>
                  </Fab>
                  <Fab color="primary" aria-label="Add" className={classes.fab}>
                    <GithubIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
