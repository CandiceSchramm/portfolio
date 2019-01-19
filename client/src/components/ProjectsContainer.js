import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Project from "./Project";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes, projects } = props;

  return (
    <div className="center-skill-container">
    <Paper className={classes.root} elevation={8}>
      {projects.map(project => (
        <Project title={project.title} image={project.img} />
      ))}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(PaperSheet);
