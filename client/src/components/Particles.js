import React, { Component } from "react";
import Particles from "react-particles-js";

class Particle extends Component {
  render() {
    return (
      <Particles style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: "100%",
        left: 0
    }}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 600
              }
            },
            size: {
              value: 3
            },
            line_linked: {
              enable: true,
              distance: 100,
              color: "#9E9E9E",
              opacity: 0.5,
              width: 1
            },
            color: {
              value: [
                "#4a126b",
                "#6a1b9a",
                "#8748ae",
                "#015384",
                "#0277bd",
                "#3492ca"
              ]
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            }
          },
          canvas: {
            height: "100%",
            width: "100%"
          }
        }}
      />
    );
  }
}

export default Particle;
