import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlusSquare, AiOutlineHeart } from "react-icons/ai";
import {
  AiFillHome,
  AiOutlineMessage,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

export default function NavBar(props) {
  let navigate = useNavigate();
  function navigateToProfile() {
    navigate("/".concat(props.user.username), {
      state: { user: props.user },
      replace: true,
    });
  }
  return (
    <nav className="sm:h-screen sticky top-0 border border-b-1 z-50 bg-white">
      <div className="hidden sm:flex flex-col gap-12 px-5 py-5 items-center justify-center h-screen">
        <div className="mt-10">
          <AiOutlineInstagram className="w-8 h-8" />
        </div>
        <ul className="flex-1 flex flex-col items-center gap-8">
          <li>
            <Link to="/">
              <a href="">
                <AiFillHome className="w-7 h-7" />
              </a>
            </Link>
          </li>
          <li>
            <a href="">
              <FiSearch className="w-7 h-7" />
            </a>
          </li>
          <li>
            <a href="">
              <MdOutlineExplore className="w-7 h-7" />
            </a>
          </li>
          <li>
            <AiOutlineMessage className="w-7 h-7" />
          </li>
          <li className="cursor-pointer">
            <AiOutlineHeart className="w-7 h-7" />
          </li>
          <li className="cursor-pointer">
            <AiOutlinePlusSquare className="w-7 h-7" />
          </li>
          <li className="" onClick={navigateToProfile}>
            <img
              className="rounded-full w-7 h-7"
              src={props.user.avatar_url}
              alt="au"
            />
          </li>
        </ul>
        <div>
          <FiMenu className="w-7 h-7" />
        </div>
      </div>
      <div className="sm:hidden flex flex-row px-4 py-3 items-center justify-between">
        <div className="w-28 h-7">
          <Link to="/login">
            <img src="/assets/logo-instagram.svg" alt="" />
          </Link>
        </div>
        <ul className="flex flex-row gap-2">
          <li>
            <a className="cursor-pointer">
              <AiOutlinePlusSquare className="w-7 h-7" />
            </a>
          </li>
          <a className="cursor-pointer">
            <AiOutlineHeart className="w-7 h-7" />
          </a>
        </ul>
      </div>
    </nav>
  );
}
