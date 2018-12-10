import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Particles from "react-particles-js";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Particles
              params={{
                particles: {
                  density: {
                    enable: true,
                    value_area: 1500
                  },
                  number: {
                    value: 150
                  },
                  size: {
                    value: 3
                  },
                  color: {
                    value: [
                      "#7e57c2",
                      "#00bcd4",
                      "#583c87",
                      "#008394",
                      "#9778ce",
                      "#33c9dc"
                    ]
                  },
                  opacity: {
                    anim: {
                      enable: true,
                      speed: 1,
                      opacity_min: 1
                    }
                  }
                },
                interactivity: {
                  events: {
                    onclick: {
                      enable: true,
                      mode: "push"
                    },
                    resize: true
                  }
                }
              }}
            />
            <Route path="/" component={Landing} />
            <div className="container">
              {/* <Route exact path="/hello" component={HelloTest} /> */}
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
