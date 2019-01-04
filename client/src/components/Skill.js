import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
        <img src={this.props.img} alt={this.props.img} className="skill-logo" />
    );
  }
}

export default Skill;
