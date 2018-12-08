import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";
import HelloTest from "./components/HelloTest";

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/hello" component={HelloTest} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
