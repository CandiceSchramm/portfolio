import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Skill extends Component {
  render() {
    return (
      <Grid item xm>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        />
        <Grid item sm>
          <img
            src={this.props.img}
            alt={this.props.title}
            className="skill-logo"
          />

          <Typography align="center" variant="subtitle1" color="primary">
            {this.props.title}
          </Typography>
        </Grid>
        <Grid />
      </Grid>
    );
  }
}

export default Skill;
