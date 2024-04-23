import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import api from "../../config/axiosConfig";
import Navbar from "../../components/Navba";
import { useNavigate } from "react-router-dom";
import alchemy from "../../config/alchemy";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      navigate("/login");
    }
    const getUserInformation = async () => {
      try {
        const response = await api.get("/user/home");
        setProfile(response.data);
        await fetchBalances(response.data.data.walletAddressesWithNetworkIcons);
      } catch (error) {
        console.error("Error fetching user information:", error.response.data);
      }
    };
    getUserInformation();
  }, []);

  const fetchBalances = async (walletAddresses) => {
    for (const wallet of walletAddresses) {
      if (wallet.network === "ethereum") {
        try {
          const balance = await alchemy.core.getBalance(wallet.address);
          wallet.balance = balance / 1000000000000000000; // Convert wei to ETH
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
      // Add other network balance fetching logic here
    }
  };
  console.log(profile);
  return (
    <>
      {" "}
      <Navbar profile={profile} />
    </>
  );
};

export default ResponsiveAppBar;
