import { useState } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../config/config";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: 0,
    avatarUrl:
      "https://media.resources.festicket.com/www/artists/BrunoMars_New.jpg",
  });

  async function register() {
    const res = await axiosInstance.post("/users", user);
    if (res.status === 201) {
      navigate("/login", { replace: true });
    }
  }

  function inputHandler(event) {
    const { name, value } = event.target;

    setUser({
      ...user,
      [name]: value,
    });
  }
  return (
    <div className="flex h-screen flex-col items-center justify-between py-4">
      <div className="flex w-[270px] flex-col items-center gap-y-2">
        <div className="mb-5 h-12 w-44">
          <Link to="/">
            <img
              src="/assets/logo-instagram.svg"
              alt=""
              className="fill-white"
            />
          </Link>
        </div>
        <div className="text-md text-center font-medium text-gray-500">
          Sign up to see photos and videos from your friends.
        </div>

        <div className="flex w-full cursor-pointer flex-row items-center justify-center rounded-sm bg-[#0095F6] py-1 px-1">
          <AiFillFacebook className="h-5 w-5" color="white" />
          <div className="text-md font-medium text-white ">
            Log In with Facebook
          </div>
        </div>
        <div className="inline-flex w-full items-center justify-center">
          <hr className="my-8 h-px w-64 border-0 bg-gray-200 dark:bg-gray-700" />
          <span className="absolute left-1/2 -translate-x-1/2 bg-white px-3 font-medium text-gray-400 dark:text-gray-500">
            OR
          </span>
        </div>
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="email"
          type="text"
          placeholder="Mobile Number or email"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="fullname"
          type="text"
          placeholder="Full Name"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="username"
          type="text"
          placeholder="Username"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="repassword"
          type="password"
          placeholder="Re-password"
          onChange={inputHandler}
        />
        <div className="self-end text-xs text-blue-500">Forget Password?</div>
        <button
          className="text-md h-10 w-full rounded-sm bg-[#0095F6] py-1 px-1 font-medium text-white"
          onClick={() => {
            register()
          }}
        >
          Sign Up
        </button>

        <div>
          Have an account?
          <Link to={"/login"}>
            <button className="text-blue-500">Log in</button>
          </Link>
        </div>
      </div>
      <div className=""></div>
      <div className="">From Meta</div>
    </div>
  );
}
