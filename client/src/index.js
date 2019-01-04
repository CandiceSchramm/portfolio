import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { amber, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: grey[900]
    },
    secondary: amber
    // light: green[50],
    // dark: green[800]
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
