import React, { Component } from "react";

class Skill extends Component {
  render() {
    return (
      <div>
        <img src={this.props.img} alt={this.props.img} className="skill-logo">
        </img>
        {/* <span className="image-lable">
       Text label
        </span> */}
      </div>
    );
  }
}

export default Skill;
