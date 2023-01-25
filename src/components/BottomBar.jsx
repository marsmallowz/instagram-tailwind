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
    if (props.user.username !== "") {
      navigate("/".concat(props.user.username), {
        state: { user: props.user },
        replace: true,
      });
    }
  }
  return (
    <div className="fixed bottom-0 z-50 w-full border border-t-2 bg-white px-6 py-2 sm:hidden">
      <ul className="flex flex-row justify-between">
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
            <BiMoviePlay className="h-7 w-7" />
          </button>
        </li>
        <li>
          <button>
            <AiOutlineMessage className="h-7 w-7" />
          </button>
        </li>
        <li onClick={navigateToProfile}>
          <button>
            {/* <Link to={"/".concat(props.user.username)}></Link> */}
            <img
              className="h-7 w-7 rounded-full object-cover"
              // src={props.user.avatar_url}
              src={props.user?.avatar_url}
              alt="au"
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
