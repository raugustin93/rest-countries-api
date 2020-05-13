import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import countries from "../json/countries.json";
import { isValidCountryCode } from "../functions/general";

export default function Country() {
  let { id } = useParams();
  const [isRedirect, setIsRedirect] = useState(isValidCountryCode(id));

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}
