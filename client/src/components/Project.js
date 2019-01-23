import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class Project extends Component {
  render() {
    return (
      <Grid item xm>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item sm>
            <div>
              <a href={this.props.link}>
                <img
                  src={this.props.image}
                  alt={this.props.title}
                  className="project-image"
                />
              </a>
            </div>
            <Typography align="center" variant="subtitle1" color="primary">
              {this.props.title}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default Project;
