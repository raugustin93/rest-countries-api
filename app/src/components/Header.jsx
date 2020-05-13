import React, { useState } from "react";
import { toggleTheme } from "../functions/theme";

export default function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  function updateTheme() {
    toggleTheme();
    setTheme(localStorage.getItem("theme"));
  }
  return (
    <header>
      <div className="container head-bar">
        <h1>Where in the world?</h1>
        <button id="switcher" onClick={updateTheme}>
          {theme} Mode
        </button>
      </div>
    </header>
  );
}
