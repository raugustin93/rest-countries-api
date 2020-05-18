import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toggleTheme } from "../functions/theme";
import { getRegions, contentRoot } from "../functions/general";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function updateTheme() {
    toggleTheme();
    setTheme(localStorage.getItem("theme"));
  }
  const renderRegionsList = () =>
    getRegions().map((region) => {
      return (
        <Link to={contentRoot(`region/${region}`)}>
          {" "}
          <button className="btn">{region}</button>{" "}
        </Link>
      );
    });

  return (
    <header>
      <div className="head-bar">
        <div className="container">
          <h1>Where in the world?</h1>
          <div className="region-list">{renderRegionsList()}</div>
          <button id="switcher" onClick={updateTheme}>
            {theme} Mode
          </button>
        </div>
      </div>
    </header>
  );
}
