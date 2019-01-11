import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  paper: {
    minHeight:"40vh",
    marginTop: "10vh",
    padding: "6vh"
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
            <Grid item sm={2}>
              <div className="intro">My name is</div>
            </Grid>

            <Grid item sm={10}>
              <div className="font-style-title" style={{ paddingBottom: 20 }}>Candice Schramm</div>
              <Typography gutterBottom variant="subtitle1" color="primary">
                I am a web developer and mortgage loan processor. I can be found
                at the local coffee shop working on my next creative project or
                collaborating with other software developers to make our
                application ideas come to life on the web. I guess you could say
                I have three loves in life: coffee, creating innovative web
                applications and the outdoors. Interested in getting outside? No
                problem. Meet me in the mountains for some rock climbing,
                snowboarding, hiking, or camping. It's important stay focused
                and inspired to do what you love and I love challenging myself
                to create fun and interesting web applications using clean code
                and creative UX/UI skills... and coffee and the outdoors, of
                course.
              </Typography>
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
