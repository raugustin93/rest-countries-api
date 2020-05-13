import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFlags } from "../functions/flagsapi";

const newFlag = {
  id: null,
  name: "",
  population: "",
  region: "",
  capital: "",
  image: ""
};

export default function Home() {
  // state
  const [flags, setFlags] = useState([]);

  useEffect(loadFlags, []);

  function loadFlags() {
    getFlags().then(({ data }) => setFlags(data));
  }

  function renderFlagCard(flag) {
    const { id, name, population, region, capital, alpha2Code } = flag;
    return (
      <div className="card" key={id}>
        <img
          src={`./assets/images/flags/${alpha2Code.toLowerCase()}.webp`}
          alt={`Flag of ${name}`}
          className="card-img-top"
        />
        <div className="card-body">
          <h4 className="card-title">
            <strong style={{ fontSize: "1.25rem" }}>{name}</strong>
          </h4>
          <p className="card-text">Population: {population}</p>
          <p className="card-text">Region: {region}</p>
          <p className="card-text">Capital: {capital}</p>
          <p className="card-text">
            <Link to={`/country/${alpha2Code.toLowerCase()}`}> More Info</Link>{" "}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="wrapper-container" className="container">
      <div id="flag-wrapper">{flags.map(renderFlagCard)}</div>
    </section>
  );
}
