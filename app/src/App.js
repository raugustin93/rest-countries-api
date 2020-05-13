import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { checkTheme } from "./functions/theme";
import Header from "./components/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";
import "./css/App.css";

function App() {
  checkTheme();
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/country/:id">
            <Country />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
