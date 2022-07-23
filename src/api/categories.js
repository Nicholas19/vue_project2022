import axios from "./index.js";

export function fetchAllCategories() {
  return axios.get("/categories?fields[0]=name&fields[1]=code");
}
