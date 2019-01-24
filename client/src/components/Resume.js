import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    minHeight: "40vh",
    marginTop: "5vh",
    padding: "6vh"
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function PaperSheet(props) {
  const { classes, image } = props;

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
        <Grid item sm={12}>
          <img src={image} alt="candice's resume" />
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
