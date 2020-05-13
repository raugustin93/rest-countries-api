const csv = require("csvtojson");
const path = require("path");
const fs = require("fs");

const csvFilePath = path.join(__dirname, "language-codes-3b2_csv.csv");
const alphaToLang = {};
const langToAlpha = {};
csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
    // console.log(jsonObj);
    jsonObj.map(({ alpha2, English }) => {
      alphaToLang[alpha2] = English;
      langToAlpha[English] = alpha2;
    });
    var data = {
      alpha: alphaToLang,
      lang: langToAlpha
    };

    data = JSON.stringify(data);
    var filepath = path.join(__dirname, "alphacodes.json");

    fs.writeFile(filepath, data, (err) =>
      err ? console.log(err) : console.log("created")
    );
  });
