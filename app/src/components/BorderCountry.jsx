import React from "react";
import { Link } from "react-router-dom";
import { getNameAlphaFromBorder, contentRoot } from "../functions/general";

export default function BorderCountry(props) {
  const { code } = props;
  const { alpha2Code, name } = getNameAlphaFromBorder(code);
  return (
    <div className="country-border">
      <Link to={contentRoot(`Country/${alpha2Code}`)}>
        <button className="btn border-btn">{name}</button>
      </Link>
    </div>
  );
}
