import { BsGearFill, BsChevronCompactDown } from "react-icons/bs";
import { IoSettingsOutline, IoCloseOutline } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserTag } from "react-icons/fa";
import { BiGrid, BiBookmark, BiRectangle, BiGroup } from "react-icons/bi";
import BottomBar from "../components/BottomBar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import user_types from "../redux/auth/types";

export default function Profile() {
  const dispatch = useDispatch();
  const { state } = useLocation();
  console.log("state");
  console.log(state);
  const [openSettings, setOpenSettings] = useState(false);

  function openSettingsHandler() {
    setOpenSettings(!openSettings);
  }

  function logOut() {
    console.log("jalan");
    dispatch({
      type: user_types.USER_LOGOUT,
    });
    localStorage.removeItem("user_data");
    // localStorage.setItem("user_data", JSON.stringify({}));
  }
  return (
    <>
      <nav className="sticky top-0">
        <div className="flex flex-row bg-white border items-center justify-between px-4 py-3 border-b-2">
          <div className="cursor-pointer">
            {openSettings ? (
              <IoCloseOutline
                className="w-8 h-8"
                onClick={openSettingsHandler}
              />
            ) : (
              <IoSettingsOutline
                className="w-6 h-6"
                onClick={openSettingsHandler}
              />
            )}
          </div>
          {openSettings ? (
            <div>Settings</div>
          ) : (
            <div className="flex flex-row items-center gap-1">
              <div className="font-medium">massandz</div>
              <BsChevronCompactDown className="w-4 h-4" />
            </div>
          )}
          {openSettings ? (
            <div className="w-6"></div>
          ) : (
            <div>
              <AiOutlineUserAdd className="w-6 h-6" />
            </div>
          )}
        </div>
      </nav>
      {openSettings ? (
        <div>
          <ul className="flex flex-col divide-y gap-1 justify-center">
            <li className="py-1 cursor-pointer" onClick={() => {}}>
              <div className="px-4">Help</div>
            </li>
            <li className="py-1 cursor-pointer" onClick={logOut}>
              <div className="px-4">
                <Link>Log Out</Link>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div>
          <div className="px-4 py-3 grid grid-cols-3 grid-rows-2 gap-x-4 ">
            <div className="row-span-2 flex">
              <img
                src={state.user.avatar_url}
                alt=""
                className="rounded-full object-cover w-28 h-28"
              />
            </div>
            <div className="col-span-2 font-light text-3xl self-center	">
              {state.user.username}
            </div>
            <button className="h-3/5 col-span-2 border-2 rounded-md font-medium text-sm">
              Edit profile
            </button>
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-medium">AlsandyMaulana</div>
            <div className="text-sm">Id line : 251509</div>
          </div>
          <div className="mb-4">
            <ul className="flex space-x-1 overflow-x-auto  items-center">
              <li className="">
                <a className="flex flex-col items-center space-y-1" href="">
                  <img
                    className=" block bg-white p-0.5 border cursor-pointer rounded-full w-16 h-16"
                    src="/assets/h1.jpg"
                    alt="my"
                  />
                  <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    Auto Chess
                  </div>
                </a>
              </li>
              <li className="">
                <a className="flex flex-col items-center space-y-1" href="">
                  <img
                    className=" block bg-white p-0.5 border cursor-pointer rounded-full w-16 h-16"
                    src="/assets/h2.jpg"
                    alt="my"
                  />
                  <div className="text-xs text-center overflow-hidden text-ellipsis w-20">
                    Pokemon Go
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-row px-2 py-2 border justify-evenly ">
            <div className="basis-1/3 flex flex-col items-center ">
              <div className="font-medium">19</div>
              <div className="text-xs text-gray-400">posts</div>
            </div>
            <div className="basis-1/3 flex flex-col items-center">
              <div className="font-medium">325</div>
              <div className="text-xs text-gray-400">followers</div>
            </div>
            <div className="basis-1/3 flex flex-col items-center">
              <div className="font-medium">335</div>
              <div className="text-xs text-gray-400">following</div>
            </div>
          </div>
          <div className="py-3 flex flex-row justify-around">
            <div>
              <BiGrid className="text-sky-500 w-7 h-7" />
            </div>
            <div>
              <BiRectangle className="text-gray-400 w-6 h-6" />
            </div>
            <div>
              <BiBookmark className="text-gray-400 w-6 h-6" />
            </div>
            <div>
              <BiGroup className="text-gray-400 w-6 h-6" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {/* kalau ada error coba gunakan overflow-hidden di tag div */}
            <div>
              <img
                src="/assets/p1.jpg"
                alt=""
                className="object-cover  aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p2.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p3.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p4.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p4-1.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p4-2.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <img
                src="/assets/p5.jpg"
                alt=""
                className="object-cover aspect-square"
              />
            </div>
          </div>
          <BottomBar user={state.user} />
        </div>
      )}
    </>
  );
}
