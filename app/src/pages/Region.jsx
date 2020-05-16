import React from "react";
import { useParams } from "react-router-dom";
import { getCountries } from "../functions/general";
import BackBtn from "../components/BackBtn";
import FlagCard from "../components/FlagCard";

export default function Region() {
  let { id } = useParams();
  const countries = getCountries(id);

  function renderFlagCard(flag) {
    return <FlagCard flag={flag} />;
  }

  return (
    <div className="container">
      <BackBtn />
      <section id="wrapper-container" className="container">
        <div id="flag-wrapper">{countries.map(renderFlagCard)} </div>
      </section>
    </div>
  );
}
