import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

class Skill extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.img} className="skill-logo" />
      </div>
    );
  }
}

export default Skill;
