import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Project from "./Project";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    minHeight: "30vh",
    marginTop: "5vh",
    marginBottom: "5vh",
    padding: "6vh"
  }
});

function PaperSheet(props) {
  const { classes, projects } = props;

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="center-item"
    >
      <Grid item sm={9}>
        <Paper className={classes.root && classes.paper} elevation={8}>
          <Grid
            container
            spacing={16}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item sm={12}>
              <Grid
                container
                spacing={8}
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >
                {projects.map((project, index) => (
                  <Project
                    image={project.img}
                    key={index}
                    title={project.title}
                    link={project.link}
                  />
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
