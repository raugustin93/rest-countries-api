const fs = require("fs");
const path = require("path");
const { flags } = require("./mockData");

const data = JSON.stringify({ flags });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
