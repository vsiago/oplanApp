import axios from "axios";

const api = axios.create({
  // baseURL: "",
  baseURL: "http://192.168.2.100:3000/api",
});

export { api };
