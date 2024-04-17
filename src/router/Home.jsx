import { useEffect, useState } from "react";

import Cookies from "js-cookie";
import api from "../../config/axiosConfig";

import Navbar from "../../components/Navba";
import { useNavigate } from "react-router-dom";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [profile, SetProfile] = useState({});
  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
    const getUserInformation = async () => {
      try {
        const response = await api.get("/user/home");
        SetProfile(response.data);
      } catch (error) {
        console.error("Error fetching user information:", error.response.data);
      }
    };
    getUserInformation();
  }, []);

  return <Navbar profile={profile} />;
};
export default ResponsiveAppBar;
