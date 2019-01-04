import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Particle from "./components/Particles";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import SkillContainer from "./components/SkillContainer";
import ProjectsContainer from "./components/ProjectsContainer";

// skill imports
import reactLogo from "./images/react_logo.png";
import nodeJSLogo from "./images/nodeJS_logo.png";
import mongoDBLogo from "./images/mongoDB_logo.png";
import javascriptLogo from "./images/javascript_logo.png";
import bootstrapLogo from "./images/bootstrap_logo.jpeg";
import css3Logo from "./images/css3_logo.png";
import sqlLogo from "./images/mysql.png";
import sequelizeLogo from "./images/sequelize.png";
import yarnLogo from "./images/yarn.png";
import npmLogo from "./images/npm_logo.png";
import html5Logo from "./images/html.png";
import vsLogo from "./images/visual_studio.png";
import githubLogo from "./images/github.png";
import jqueryLogo from "./images/jquery.png";
import expressLogo from "./images/express_logo.png";
import restApiLogo from "./images/restAPI.png";
import herokuLogo from "./images/heroku_logo.jpg";
import passportLogo from "./images/passport_logo.png";

//project imports

import memoryGamePic from "./images/project_emoji.jpeg";
import crystalCollectorPic from "./images/project_crystal_collector.jpg";
import liriPic from "./images/project_liri.png";
import bamazonPic from "./images/project_bamazon.png";
import zIndex from "@material-ui/core/styles/zIndex";

// skill images

const images = [
  mongoDBLogo,
  expressLogo,
  reactLogo,
  nodeJSLogo,
  javascriptLogo,
  restApiLogo,
  bootstrapLogo,
  css3Logo,
  sqlLogo,
  passportLogo,
  sequelizeLogo,
  yarnLogo,
  npmLogo,
  html5Logo,
  vsLogo,
  herokuLogo,
  githubLogo,
  jqueryLogo
];

//projects info

const projects = [
  {
    img: memoryGamePic,
    title: "Memory Game"
  },
  {
    img: crystalCollectorPic,
    title: "Crystal Collector"
  },
  {
    img: liriPic,
    title: "Liri Node App"
  },
  {
    img: bamazonPic,
    title: "Bamazon Node/SQL App"
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Particle />
            <Navbar/>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route
              path="/skills"
              render={() => <SkillContainer skillLogos={images} />}
            />
            <Route
              path="/projects"
              render={() => <ProjectsContainer projectItems={projects} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
