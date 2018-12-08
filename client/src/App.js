import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./components/Header";

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            {/* <Header /> */}
            <Route exact path="/" component={Header} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
