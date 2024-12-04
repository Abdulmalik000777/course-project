import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./ThemeContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./light.css";
import "./dark.css";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
