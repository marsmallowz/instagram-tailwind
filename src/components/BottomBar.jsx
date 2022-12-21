import { AiFillHome, AiOutlineMessage } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";

// FiSearch
// BiMoviePlay
// AiOutlineMessage
export default function BottomBar(props) {
  let navigate = useNavigate();
  function navigateToProfile() {
    navigate("/".concat(props.user.username), {
      state: { user: props.user },
      replace: true,
    });
  }
  return (
    <div className="fixed bottom-0 w-full border border-t-2 z-50 bg-white px-6 py-2 sm:hidden">
      <ul className="flex flex-row justify-between">
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
            <BiMoviePlay className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href="">
            <AiOutlineMessage className="w-7 h-7" />
          </a>
        </li>
        <li onClick={navigateToProfile}>
          <a href="">
            {/* <Link to={"/".concat(props.user.username)}></Link> */}
            <img
              className="rounded-full w-7 h-7 object-cover"
              src={props.user.avatar_url}
              alt="au"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
