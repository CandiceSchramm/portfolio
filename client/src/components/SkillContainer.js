import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Skill from "./Skill";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes, skillLogos } = props;

  return (
    <div className="center-skill-container">
    <Paper className={classes.root} elevation={8}>
      {skillLogos.map((skillLogo,index) => (
        <Skill img={skillLogo} key={index}/>
      ))}
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired
  };
  
  export default withStyles(styles)(PaperSheet);
