const {
  alpha2country,
  country2alpha
} = require("../json/alphaCodes(CountryNames).json");
const countries = require("../json/countries.json"); // an array
const { alpha } = require("../json/alphacodes(lang).json");
const { alphaToCurrency } = require("../json/currencies.json");
const { borderToCountry } = require("../json/borders.json");

export function contentRoot(path) {
  let root = "/";
  if (window.location.hostname === "rudsona.github.io")
    root = "https://rudsona.github.io/rest-countries-api/";
  if (path) return root + path;
  else return root;
}

export function getNameAlphaFromBorder(code) {
  const name = borderToCountry[code];
  const alpha2Code = country2alpha[name];
  return { name, alpha2Code };
}

export function getCountries(region) {
  return countries.filter((country) => country.region === region);
}

export function getCountry(code) {
  const name = getCountryName(code);
  return countries.find((country) => country.name === name);
}

export function getCountryName(code) {
  return alpha2country[code.toUpperCase()];
}

export function getCurrencyStr(codeArr) {
  let str = "";
  codeArr.map((code, i) => {
    if (i === 0) str += code;
    else str = `, ${code}`;
  });
  return str;
}

export const getCurrencyName = (code) => alphaToCurrency[code.toUpperCase()];

export function getCurrencyNamesStr(codeArr) {
  let str = "";
  codeArr.map((code, i) => {
    let name = getCurrencyName(code);
    if (i === 0) {
      str += name;
    } else {
      str += `, ${name}`;
    }
  });
  return str;
}

export const getLanguageName = (code) => alpha[code];

export function getLanguageNamesStr(codeArr) {
  let str = "";
  codeArr.map((code, i) => {
    let name = getLanguageName(code);
    if (i === 0) {
      str += name;
    } else {
      str += `, ${name}`;
    }
  });
  return str;
}

export function getRegions() {
  let regions = [];
  countries.map((c) => regions.push(c.region));
  return [...new Set(regions)]; // returns a unique array
}

export function getSubRegions(region) {
  let subRegions = [];
  let state = countries.filter((c) => c.region === region);
  state.map((s) => subRegions.push(s.subregion));
  return [...new Set(subRegions)];
}

export function isValidCountryCode(code) {
  if (alpha2country[code]) {
    return true;
  } else {
    return false;
  }
}
