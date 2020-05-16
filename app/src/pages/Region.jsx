import React from "react";
import { useParams } from "react-router-dom";
import { getSubRegions } from "../functions/general";

export default function Region() {
  let { id } = useParams();

  function renderSubRegions() {
    return getSubRegions(id).map();
  }

  return (
    <div className="container">
      <div className="">
        <strong>SubRegions:</strong>
      </div>
    </div>
  );
}
