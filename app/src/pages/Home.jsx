import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFlags } from "../functions/flagsapi";
import FlagCard from "../components/FlagCard";

export default function Home() {
  // state
  const [flags, setFlags] = useState([]);

  useEffect(loadFlags, []);

  function loadFlags() {
    getFlags().then(({ data }) => setFlags(data));
  }

  function renderFlagCard(flag) {
    return <FlagCard flag={flag} />;
  }

  return (
    <section id="wrapper-container" className="container">
      <div id="flag-wrapper">{flags.map(renderFlagCard)}</div>
    </section>
  );
}
