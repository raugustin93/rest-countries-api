import axios from "axios";
import countries from "../json/countries.json";

const serverUrl = "http://localhost:3003/flags";

// export function getFlags() {
//   return axios.get(serverUrl);
// }

export function getFlags(names) {
  const flags = [];
  for (let i = 0; i < names.length; i++) {
    const countryName = names[i];
    const country = countries.find((c) => c.name === countryName);
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
  return flags;
}
