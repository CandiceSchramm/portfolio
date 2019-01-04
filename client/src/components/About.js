import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div className="center-item">
      <Paper className={classes.root} elevation={8}>
        <div className="center-container">
          <div className="parent">
            <div className="rotated-intro">
              <p className="intro">My name is</p>
            </div>
            <div className="right-title">
              <p className="font-style-title">Candice Schramm</p>
            </div>
          </div>
          <div>
            <Typography variant="subtitle1" gutterBottom color="primary">
              I am a web developer and mortgage loan processor. I can be found
              at the local coffee shop working on my next creative project or
              collaborating with other software developers to make our
              application ideas come to life on the web. I guess you could say I
              have three loves in life: coffee, creating innovative web
              applications and the outdoors. Interested in getting outside? No
              problem. Meet me in the mountains for some rock climbing,
              snowboarding, hiking, or camping. It's important stay focused and
              inspired to do what you love and I love challenging myself to
              create fun and interesting web applications using clean code and
              creative UX/UI skills... and coffee and the outdoors, of course.
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
