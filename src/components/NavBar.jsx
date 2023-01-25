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
    <nav className="border-b-1 sticky top-0 z-50 border bg-white sm:h-screen">
      <div className="hidden h-full flex-col items-center justify-center gap-12 px-5 py-5 sm:flex">
        <div className="mt-10">
          <AiOutlineInstagram className="h-8 w-8" />
        </div>
        <ul className="flex flex-1 flex-col items-center gap-8">
          <li>
            <Link to="/">
              <button>
                <AiFillHome className="h-7 w-7" />
              </button>
            </Link>
          </li>
          <li>
            <button>
              <FiSearch className="h-7 w-7" />
            </button>
          </li>
          <li>
            <button>
              <MdOutlineExplore className="h-7 w-7" />
            </button>
          </li>
          <li>
            <AiOutlineMessage className="h-7 w-7" />
          </li>
          <li className="cursor-pointer">
            <AiOutlineHeart className="h-7 w-7" />
          </li>
          <li
            onClick={() => {
              console.log("jalan");
              props.setShowModalNewPost(true);
            }}
            className="cursor-pointer"
          >
            <AiOutlinePlusSquare className="h-7 w-7" />
          </li>
          <li className="" onClick={navigateToProfile}>
            <img
              className="h-7 w-7 rounded-full"
              src={props.user.avatarUrl}
              alt="au"
            />
          </li>
        </ul>
        <div>
          <FiMenu className="h-7 w-7" />
        </div>
      </div>
      <div className="flex flex-row items-center justify-between px-4 py-3 sm:hidden">
        <div className="h-7 w-28">
          <Link to="/login">
            <img src="/assets/logo-instagram.svg" alt="" />
          </Link>
        </div>
        <ul className="flex flex-row gap-2">
          <li
            onClick={() => {
              console.log("jalan");
              props.setShowModalNewPost(true);
            }}
          >
            <button>
              <AiOutlinePlusSquare className="h-7 w-7" />
            </button>
          </li>
          <button>
            <AiOutlineHeart className="h-7 w-7" />
          </button>
        </ul>
      </div>
    </nav>
  );
}
