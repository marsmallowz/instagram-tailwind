import { axiosInstance } from "../../config/config";
import user_types from "../auth/types";

export function userLogin(values) {
  return async function (dispatch) {
    try {
      const res = await axiosInstance.post("/users/login", values);
      const userData = res.data;

      if (userData) {
        dispatch({
          type: user_types.USER_LOGIN,
          payload: userData,
        });

        localStorage.setItem("user_data", JSON.stringify(userData));
        console.log("jalan stringify");

        return { status: true, data: userData };
      }
      console.log("jalan false");

      return { status: false, data: {} };
    } catch (err) {
      console.log(err);
      return { status: false, data: {} };
    }
  };
}
