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
              opacity: 0.2,
              width: 1.5
            },
            color: {
              value: [
                "#424242",
                "#616161",
                "#757575",
                "#FFCA28",
                "#FFD54F",
                "#FFB300"
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
