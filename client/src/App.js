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
import burgerPic from "./images/project_burger.png";
import hushPic from "./images/project_hush.png";
import groupSquadGoalsPic from "./images/project_squad_goals.png";

// skill images

const skillsList = [
  {
    title: "MongoDB",
    logo: mongoDBLogo,
    url: "https://www.mongodb.com/"
  },
  {
    title: "Express",
    logo: expressLogo,
    url: "https://expressjs.com/"
  },
  {
    title: "React",
    logo: reactLogo,
    url: "https://reactjs.org/"
  },
  {
    title: "Node JS",
    logo: nodeJSLogo,
    url: "https://nodejs.org/en/about/"
  },
  {
    title: "Javascript",
    logo: javascriptLogo,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "RESTful API",
    logo: restApiLogo,
    url: "https://restfulapi.net/"
  },
  {
    title: "Bootstrap",
    logo: bootstrapLogo,
    url: "https://getbootstrap.com/"
  },
  {
    title: "CSS3",
    logo: css3Logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3"
  },
  {
    title: "SQL",
    logo: sqlLogo,
    url: "https://dev.mysql.com/"
  },
  {
    title: "Passport.js",
    logo: passportLogo,
    url: "http://www.passportjs.org/"
  },
  {
    title: "Sequalize.js",
    logo: sequelizeLogo,
    url: "http://docs.sequelizejs.com/"
  },
  {
    title: "Yarn",
    logo: yarnLogo,
    url: "https://yarnpkg.com/en/"
  },
  {
    title: "Node Package Manager",
    logo: npmLogo,
    url: "https://www.npmjs.com/"
  },
  {
    title: "HTML5",
    logo: html5Logo,
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
  },
  {
    title: "Visual Studio Code",
    logo: vsLogo,
    url: "https://code.visualstudio.com/"
  },
  {
    title: "Heroku",
    logo: herokuLogo,
    url: "https://www.heroku.com/"
  },
  {
    title: "GitHub",
    logo: githubLogo,
    url: "https://github.com/"
  },
  {
    title: "jQuery",
    logo: jqueryLogo,
    url: "https://jquery.com/"
  }
];

//projects info

const projectList = [
  { img: memoryGamePic, title: "Memory Game" },
  { img: crystalCollectorPic, title: "Crystal Collector" },
  { img: liriPic, title: "Liri Node App" },
  { img: bamazonPic, title: "Bamazon Node/SQL App" },
  { img: burgerPic, title: "Eat Dem Burgers!" },
  { img: hushPic, title: "Hush... What's Your Secret?" },
  { img: groupSquadGoalsPic, title: "#SquadGoals" }
];

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Particle />
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route
              path="/skills"
              render={() => <SkillContainer skills={skillsList} />}
            />
            <Route
              path="/projects"
              render={() => <ProjectsContainer projects={projectList} />}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
