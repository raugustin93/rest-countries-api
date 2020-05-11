import React from "react";
import { toggleTheme } from "../functions/theme";

export default function Header() {
  return (
    <header>
      <div className="container head-bar">
        <h1>Where in the world?</h1>
        <button id="switcher" onClick={toggleTheme}>
          Dark Mode
        </button>
      </div>
    </header>
  );
}
