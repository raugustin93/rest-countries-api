import React from "react";
import { Link } from "react-router-dom";
import { contentRoot } from "../functions/general";

export default function FlagCard(props) {
  const { name, population, region, capital, alpha2Code } = props.flag;
  return (
    <div className="card" key={name}>
      <img
        src={contentRoot(
          `assets/images/flags/${alpha2Code.toLowerCase()}.webp`
        )}
        alt={`Flag of ${name}`}
        className="card-img-top"
      />
      <div className="card-body">
        <h4 className="card-title">
          <strong style={{ fontSize: "1.25rem" }}>{name}</strong>
        </h4>
        <p className="card-text">Population: {population.toLocaleString()}</p>
        <p className="card-text">Region: {region}</p>
        <p className="card-text">Capital: {capital}</p>
        <p className="card-text">
          <Link to={contentRoot(`country/${alpha2Code.toLowerCase()}`)}>
            {" "}
            More Info
          </Link>{" "}
        </p>
      </div>
    </div>
  );
}
