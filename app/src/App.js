import React from "react";
import { BrowserRouter as Router, Link, Switch } from "react-router-dom";
import { checkTheme } from "./functions/theme";
import Header from "./components/Header";
import "./css/App.css";

function App() {
  checkTheme();
  return (
    <div className="App">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
