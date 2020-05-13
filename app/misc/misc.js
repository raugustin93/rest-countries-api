const fs = require("fs");
const path = require("path");
const countries = require("./countries.json");
// const {} = require("./alphacodes.json");

const alphaCodesCountries = {
  alpha2country: {},
  country2alpha: {}
};
countries.map((country) => {
  const { alpha2Code, name } = country;
  alphaCodesCountries.alpha2country[alpha2Code] = name;
  alphaCodesCountries.country2alpha[name] = alpha2Code;
});

const data = JSON.stringify(alphaCodesCountries);
const filepath = path.join(__dirname, "alphaCodes(CountryNames).json");
fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log("File created");
});
