import { BsChevronCompactDown } from "react-icons/bs";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { BiGrid, BiBookmark, BiRectangle, BiGroup } from "react-icons/bi";
import BottomBar from "../components/BottomBar";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import user_types from "../redux/auth/types";
import { axiosInstance } from "../config/config";

export default function Profile() {
  const userSelector = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const { state } = useLocation();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [isProfile, setIsProfile] = useState(false);

  async function fetchUser(username) {
    const res = await axiosInstance.get("/users", { params: { username } });
    setUser(res.data[0]);
  }

  const [openSettings, setOpenSettings] = useState(false);

  function openSettingsHandler() {
    setOpenSettings(!openSettings);
  }

  function logOut() {
    dispatch({
      type: user_types.USER_LOGOUT,
    });
    // localStorage.removeItem("user_data");
    localStorage.clear();
    window.location.reload(true);
  }

  useEffect(() => {
    setIsLoading(false);
    let username = location.pathname?.split("/")[1];
    if (username === userSelector.username) {
      setUser({ ...userSelector });
      // fetchPost(userSelector.username)
      setIsProfile(true);
    } else {
      fetchUser(username);
      // fetchPost(username)
      setIsProfile(false);
    }
  }, [location.pathname?.split("/")[1]]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          <nav className="sticky top-0">
            <div className="flex flex-row items-center justify-between border border-b-2 bg-white px-4 py-3">
              {isProfile ? (
                <div className="cursor-pointer">
                  {openSettings ? (
                    <IoCloseOutline
                      className="h-8 w-8"
                      onClick={openSettingsHandler}
                    />
                  ) : (
                    <IoSettingsOutline
                      className="h-6 w-6"
                      onClick={openSettingsHandler}
                    />
                  )}
                </div>
              ) : null}

              {openSettings ? (
                <div>Settings</div>
              ) : (
                <div className="flex flex-row items-center gap-1">
                  <div className="font-medium">massandz</div>
                  <BsChevronCompactDown className="h-4 w-4" />
                </div>
              )}
              {openSettings ? (
                <div className="w-6"></div>
              ) : (
                <div>
                  <AiOutlineUserAdd className="h-6 w-6" />
                </div>
              )}
            </div>
          </nav>
          {openSettings ? (
            <div>
              <ul className=" flex flex-col justify-center gap-1 divide-y">
                <li className="cursor-pointer py-1" onClick={() => { }}>
                  <div className="px-4">Help</div>
                </li>
                <li className="cursor-pointer py-1" onClick={logOut}>
                  <div className="px-4">
                    <Link>Log Out</Link>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 grid-rows-2 gap-x-4 px-4 py-3 ">
                <div className="row-span-2 flex">
                  <img
                    src={user.avatarUrl}
                    alt=""
                    className="h-28 w-28 rounded-full object-cover"
                  />
                </div>
                <div className="col-span-2 self-center text-3xl font-light	">
                  {user.username}
                </div>
                <button className="col-span-2 h-3/5 rounded-md border-2 text-sm font-medium">
                  Edit profile
                </button>
              </div>
              <div className="px-4 py-3">
                <div className="text-sm font-medium">AlsandyMaulana</div>
                <div className="text-sm">Id line : 251509</div>
              </div>
              <div className="mb-4">
                <ul className="flex items-center space-x-1  overflow-x-auto">
                  <li className="">
                    <button
                      className="flex flex-col items-center space-y-1"
                      href=""
                    >
                      <img
                        className=" block h-16 w-16 cursor-pointer rounded-full border bg-white p-0.5"
                        src="/assets/h1.jpg"
                        alt="my"
                      />
                      <div className="w-20 overflow-hidden text-ellipsis text-center text-xs">
                        Auto Chess
                      </div>
                    </button>
                  </li>
                  <li className="">
                    <button
                      className="flex flex-col items-center space-y-1"
                      href=""
                    >
                      <img
                        className=" block h-16 w-16 cursor-pointer rounded-full border bg-white p-0.5"
                        src="/assets/h2.jpg"
                        alt="my"
                      />
                      <div className="w-20 overflow-hidden text-ellipsis text-center text-xs">
                        Pokemon Go
                      </div>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row justify-evenly border px-2 py-2 ">
                <div className="flex basis-1/3 flex-col items-center ">
                  <div className="font-medium">19</div>
                  <div className="text-xs text-gray-400">posts</div>
                </div>
                <div className="flex basis-1/3 flex-col items-center">
                  <div className="font-medium">0</div>
                  <div className="text-xs text-gray-400">followers</div>
                </div>
                <div className="flex basis-1/3 flex-col items-center">
                  <div className="font-medium">0</div>
                  <div className="text-xs text-gray-400">following</div>
                </div>
              </div>
              <div className="flex flex-row justify-around py-3">
                <div>
                  <BiGrid className="h-7 w-7 text-sky-500" />
                </div>
                <div>
                  <BiRectangle className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <BiBookmark className="h-6 w-6 text-gray-400" />
                </div>
                <div>
                  <BiGroup className="h-6 w-6 text-gray-400" />
                </div>
              </div>
              {/* <div className="grid grid-cols-3 gap-1">
                //kalau ada error coba gunakan overflow-hidden di tag div
                <div>
                  <img
                    src="/assets/p1.jpg"
                    alt=""
                    className="aspect-square  object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p2.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p3.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p4.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p4-1.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p4-2.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
                <div>
                  <img
                    src="/assets/p5.jpg"
                    alt=""
                    className="aspect-square object-cover"
                  />
                </div>
              </div> */}
              <BottomBar user={user} />
            </div>
          )}
        </>
      )}
    </>
  );
}
