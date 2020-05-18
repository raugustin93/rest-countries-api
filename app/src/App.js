import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { checkTheme } from "./functions/theme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";
import "./css/App.css";
import Region from "./pages/Region";

function App() {
  checkTheme();
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/region/:id" component={Region} />
        <Route exact path="/country/:id" component={Country} />
        <Route exact path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
