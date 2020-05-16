const fs = require("fs");
const path = require("path");
const countries = require("./countries.json");
// const {} = require("./alphacodes.json");
const codesAllJson = require("./codes-all_json.json");

//#region alpha2 and alpha3 codes
/*
const alphaCodesCountries = {
  alphaToCountry: {},
  countryToAlpha: {}
};

countries.map((country) => {
  const { alpha3Code, name } = country;
  alphaCodesCountries.alphaToCountry[alpha3Code] = name;
  alphaCodesCountries.countryToAlpha[name] = alpha3Code;
});

const data = JSON.stringify(alphaCodesCountries);
*/
//#endregion

//#region  currency
/*
const currencyNames = {
  alphaToCurrency: {},
  currencyToAlpha: {}
};

for (let i = 0; i < codesAllJson.length; i++) {
  const country = codesAllJson[i];
  const { AlphabeticCode, Currency } = country;
  if (currencyNames.alphaToCurrency[AlphabeticCode]) continue;
  currencyNames.alphaToCurrency[AlphabeticCode] = Currency;
  currencyNames.currencyToAlpha[Currency] = AlphabeticCode;
}
*/
//#endregion

const borderNames = {
  borderToCountry: {},
  countryToBorder: {}
};

countries.map((country) => {
  const { borders, name, alpha3Code } = country;
  for (let i = 0; i < borders.length; i++) {
    const border = borders[i];
    if (borderNames.borderToCountry[border]) continue;
    let state = countries.find((c) => c.alpha3Code === border);
    borderNames.borderToCountry[border] = state.name;
    borderNames.countryToBorder[state.name] = border;
  }
});

const data = JSON.stringify(borderNames);

const filepath = path.join(__dirname, "borders.json");
fs.writeFile(filepath, data, (err) => {
  err ? console.log(err) : console.log("File created");
});
