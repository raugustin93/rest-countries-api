import React from "react";
import { Link } from "react-router-dom";

export default function BackBtn() {
  return (
    <div id="backBtn" className="container">
      <Link to="/">
        <a href="#" className="btn">
          Back
        </a>
      </Link>
    </div>
  );
}
