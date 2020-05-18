import React, { useEffect, useState } from "react";
import { getFlags } from "../functions/flagsapi";
import FlagCard from "../components/FlagCard";

export default function Home() {
  // state
  const [flags, setFlags] = useState([]);
  useEffect(loadFlags, []);
  const mainFlags = [
    "United States",
    "Haiti",
    "Jamaica",
    "Nigeria",
    "Ghana",
    "France",
    "South Africa",
    "Cuba",
    "Ethiopia",
    "Dominican Republic",
    "Canada",
    "Tanzania"
  ];

  function loadFlags() {
    // getFlags().then(({ data }) => setFlags(data));
    const flagsObj = getFlags(mainFlags);
    setFlags(flagsObj);
  }

  function renderFlagCard(flag) {
    return <FlagCard flag={flag} />;
  }

  return (
    <section id="wrapper-container" className="container mt-5">
      <div id="flag-wrapper">{flags.map(renderFlagCard)}</div>
    </section>
  );
}
