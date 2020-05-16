const fs = require("fs");
const path = require("path");
// const { flags } = require("./misc/mockData");
const countries = require("./misc/countries.json");
let flags = [];
const includes = [
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

for (let i = 0; i < includes.length; i++) {
  const element = includes[i];
  const country = countries.find(({ name }) => name == element);
  const { name, population, region, capital, alpha2Code } = country;
  const fields = {
    name: name,
    population: population,
    region: region,
    capital: capital,
    alpha2Code: alpha2Code
  };
  flags.push(fields);
}

const data = JSON.stringify({ flags });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
