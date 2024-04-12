import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
