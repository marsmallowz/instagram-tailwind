import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRoutes } from "react-router-dom";
import { axiosInstance } from "../config/config";
import user_types from "../redux/auth/types";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      console.log("auth jalan");
      console.log(new Date(Date.now()));
      const savedDataToken = localStorage.getItem("token");
      if (savedDataToken) {
        await axiosInstance
          .get("/auth/checktoken", {
            headers: { Authorization: `Bearer ${savedDataToken}` },
          })
          .then((res) => {
            const parseDataUser = res.data;
            dispatch({
              type: user_types.USER_LOGIN,
              payload: parseDataUser,
            });
          })
          .catch((err) => {
            console.log("error");
            console.log(err);
            if (err.code !== "ERR_NETWORK") {
              localStorage.removeItem("token");
            }
            // harusnya disini dibikin jika error bukan gara2
            // server down / ERR_NETWORK maka menuju ke page yang menjelaskan hal tersebut,
            // kecuali jika error disebabkan bukan oleh ERR_NETWORK otomatis ke login page.
          })
          .finally(() => {
            setIsLoading(false);
          });
      } else {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return isLoading ? <div>Loading</div> : children;
};

export default AuthProvider;
