import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="center-item">
      <Paper className={classes.root} elevation={8}>
        <div className="center-container">
          <Typography variant="h2" gutterBottom color="secondary">
            <p className="intro">Hello World!</p>
          </Typography>
          <Typography variant="subheading" gutterBottom color="primary">
            Full Stack Web Developement by
          </Typography>
          <div className="right-title">
            <p className="font-style-title">Candice Schramm</p>
          </div>
        </div>
      </Paper>
      <div className="center-container">
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
