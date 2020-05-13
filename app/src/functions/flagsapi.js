import axios from "axios";
const serverUrl = "http://localhost:3003/flags";

export function getFlags() {
  return axios.get(serverUrl);
}
