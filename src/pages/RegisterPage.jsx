import { useState } from "react";
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/config";
import user_types from "../redux/auth/types";

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registerStatus, setRegisterStatus] = useState(false);
  const [user, setUser] = useState({
    id: 0,
    avatar_url:
      "https://media.resources.festicket.com/www/artists/BrunoMars_New.jpg",
  });

  async function register() {
    const res = await axiosInstance.post("/users", user);
    const userData = res;

    dispatch({
      type: user_types.USER_LOGIN,
      payload: userData,
    });

    localStorage.setItem("user_data", JSON.stringify(userData));

    userData
      ? navigate("/", { state: { user: userData }, replace: true })
      : setRegisterStatus(true);
  }

  function inputHandler(event) {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  }
  return (
    <div className="h-screen flex flex-col items-center justify-between  py-4">
      <div className="flex flex-col items-center w-[270px] gap-y-2">
        <div className="w-44 h-12 mb-5">
          <Link to="/">
            <img
              src="/assets/logo-instagram.svg"
              alt=""
              className="fill-white"
            />
          </Link>
        </div>
        <div className="font-medium text-center text-gray-500 text-md">
          Sign up to see photos and videos from your friends.
        </div>

        <div className="flex flex-row bg-[#0095F6] w-full py-1 px-1  rounded-sm justify-center items-center cursor-pointer">
          <AiFillFacebook className="w-5 h-5" color="white" />
          <div className="text-md font-medium text-white ">
            Log In with Facebook
          </div>
        </div>
        <div className="inline-flex justify-center items-center w-full">
          <hr className="my-8 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="absolute left-1/2 px-3 font-medium text-gray-400 bg-white -translate-x-1/2 dark:text-gray-500">
            OR
          </span>
        </div>
        <input
          className="w-[270px] py-1 px-1 border-2 rounded-sm placeholder:text-xs"
          name="email"
          type="text"
          placeholder="Mobile Number or email"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] py-1 px-1 border-2 rounded-sm placeholder:text-xs"
          name="name"
          type="text"
          placeholder="Full Name"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] py-1 px-1 border-2 rounded-sm placeholder:text-xs"
          name="username"
          type="text"
          placeholder="Username"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] py-1 px-1 border-2 rounded-sm placeholder:text-xs"
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <div className="self-end text-xs text-blue-500">Forget Password?</div>
        <button
          className="bg-[#0095F6] w-full py-1 px-1 h-10 rounded-sm text-md font-medium text-white"
          onClick={register}
        >
          Sign Up
        </button>

        <div>
          Have an account?
          <Link to={"/login"}>
            <a className="text-blue-500" href="">
              {" "}
              Log in
            </a>
          </Link>
        </div>
      </div>
      <div className=""></div>
      <div className="">From Meta</div>
    </div>
  );
}
