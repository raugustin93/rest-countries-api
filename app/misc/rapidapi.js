var unirest = require("unirest");
const fs = require("fs");
const path = require("path");

var req = unirest("GET", "https://restcountries-v1.p.rapidapi.com/all");

req.headers({
  "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
  "x-rapidapi-key": "f07d7d5f30msh7a4334d61a7e8c5p103079jsn9a7fc39602c3",
  useQueryString: true
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);
  writeToFile(res.body);
});

function writeToFile(countries) {
  var data = JSON.stringify(countries);
  const filepath = path.join(__dirname, "countries.json");
  fs.writeFile(filepath, data, function (err) {
    err ? console.log(err) : console.log("file created");
  });
}
