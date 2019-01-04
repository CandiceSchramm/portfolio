import React, { Component } from "react";

class Project extends Component {
  render() {
    return (
      <div>
        <img src={this.props.image} alt="project_img" />
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default Project;
