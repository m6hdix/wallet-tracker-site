import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("token");
const api = axios.create({
  baseURL: "https://wallet-tracker-site-back.vercel.app/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
