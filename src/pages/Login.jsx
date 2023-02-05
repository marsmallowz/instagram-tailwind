import { useState } from "react";
import { AiFillFacebook, AiOutlineDown } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/middleware/userauth";

export default function Login() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username_email_phonenumber: "",
    password: "",
  });
  const [loginStatus, setLoginStatus] = useState(false);

  async function Login() {
    const isAuth = await dispatch(userLogin(user));


    if (isAuth.status) {
      return navigate("/", { state: { user: isAuth.data }, replace: true });
    }
    return setLoginStatus(true);
  }

  function inputHandler(event) {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }
  return (
    <div className="flex h-screen flex-col items-center justify-between  py-4">
      <div className="flex flex-row items-center gap-1">
        <div className="">English</div>
        <AiOutlineDown className="h-4 w-4" />
      </div>
      <div className="flex w-[270px] flex-col items-center gap-y-2">
        <div className="mb-10 h-12 w-44">
          <Link to="/">
            <img
              src="/assets/logo-instagram.svg"
              alt=""
              className="fill-white"
            />
          </Link>
        </div>
        <div className="flex w-full cursor-pointer flex-row items-center justify-center  rounded-sm bg-[#0095F6] py-1 px-1">
          <AiFillFacebook className="h-5 w-5" color="white" />
          <div className="text-md font-medium text-white ">
            Continue With Facebook
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
          name="username_email_phonenumber"
          type="text"
          placeholder="Phone number, username, or email"
          onChange={inputHandler}
        />
        <input
          className="w-[270px] rounded-sm border-2 py-1 px-1 placeholder:text-xs"
          name="password"
          type="password"
          placeholder="Password"
          onChange={inputHandler}
        />
        <div className="self-end text-xs text-blue-500">Forget Password?</div>
        {!loginStatus ? null : <div>wrong username/password</div>}
        <button
          className="text-md h-10 w-full roundeobile Number or ed-sm bg-[#0095F6] py-1 px-1 font-medium text-white"
          onClick={() => {
            Login()
          }}
        >
          Log In
        </button>

        <div>
          Don't have account?
          <Link to="/register">
            <button className="ml-2 text-blue-500"> Sign up</button>
          </Link>
        </div>
      </div>
      <div className=""></div>
      <div className="">From Meta</div>
    </div>
  );
}
