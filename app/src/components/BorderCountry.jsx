import React from "react";
import { Link } from "react-router-dom";
import { getNameAlphaFromBorder } from "../functions/general";

export default function BorderCountry(props) {
  const { code } = props;
  const { alpha2Code, name } = getNameAlphaFromBorder(code);
  return (
    <div className="country-border">
      <Link to={`/Country/${alpha2Code}`}>
        <button className="btn border-btn">{name}</button>
      </Link>
    </div>
  );
}
