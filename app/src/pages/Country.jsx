import React from "react";
import { useParams } from "react-router-dom";
import {
  getCountryName,
  getCountry,
  getLanguageNamesStr,
  getCurrencyStr
} from "../functions/general";
import BackBtn from "../components/BackBtn";
import BorderCountry from "../components/BorderCountry";

export default function Country() {
  let { id } = useParams();
  const countryInfo = getCountry(id);
  let {
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages,
    borders
  } = countryInfo;

  return (
    <div className="container">
      <BackBtn />
      <div id="country">
        <div className="country-image">
          <img
            src={`/assets/images/w702/${id.toLowerCase()}.webp`}
            alt={`Flag of ${getCountryName(id)}`}
          />
        </div>
        <div className="country-info">
          <h2>{getCountryName(id)}</h2>
          <div className="country-list">
            <ul>
              <li>
                <strong>Native Name:</strong> {nativeName}
              </li>
              <li>
                <strong>Population:</strong> {population.toLocaleString()}
              </li>
              <li>
                <strong>Region:</strong> {region}
              </li>
              <li>
                <strong>Sub Region:</strong> {subregion}
              </li>
              <li>
                <strong>Capital:</strong> {capital}
              </li>
            </ul>
            <ul>
              <li>
                <strong>Top Level Domain:</strong> {topLevelDomain}{" "}
              </li>
              <li>
                <strong>Currencies:</strong> {getCurrencyStr(currencies)}{" "}
              </li>
              <li>
                <strong>Languages:</strong> {getLanguageNamesStr(languages)}{" "}
              </li>
            </ul>
          </div>
          <div>
            <div className="country-borders">
              <div style={{ marginBottom: "1em" }}>Border Countries:</div>
              {borders.map((border) => (
                <BorderCountry code={border} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
