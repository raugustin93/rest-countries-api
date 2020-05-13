const { alpha2country } = require("../json/alphaCodes(CountryNames).json");

export function isValidCountryCode(code) {
  if (alpha2country[code]) {
    return true;
  } else {
    return false;
  }
}
