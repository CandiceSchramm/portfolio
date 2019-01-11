import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Skill from "./Skill";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    minHeight: "30vh",
    marginTop: "10vh",
    padding: "6vh"
  }
});

function PaperSheet(props) {
  const { classes, skillLogos } = props;

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
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item sm={12}>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                {skillLogos.map((skillLogo, index) => (
                  <Skill img={skillLogo} key={index} />
                ))}
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
