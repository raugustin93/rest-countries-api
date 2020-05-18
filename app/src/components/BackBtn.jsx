import React from "react";
import { Link } from "react-router-dom";
import { contentRoot } from "../functions/general";

export default function BackBtn() {
  return (
    <Link to={contentRoot()}>
      <button id="backBtn" className="btn">
        Back
      </button>
    </Link>
  );
}
