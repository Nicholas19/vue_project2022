import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://strapi.elextra.pp.ua/api",
});

export default axiosInstance;
