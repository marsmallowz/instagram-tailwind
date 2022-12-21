import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import NavBar from "../components/NavBar";
import Post from "../components/Post";
import Stories from "../components/Stories";
import { axiosInstance } from "../config/config";

export default function Home() {
  let navigate = useNavigate();
  const userSelector = useSelector((state) => state.auth);

  const { state } = useLocation();

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    await axiosInstance.get("posts").then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    console.log("state");
    console.log(state);
    fetchPosts();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row bg-slate-50">
      <NavBar user={userSelector} />
      {/* max-w-5xl pt-8*/}
      <main className="flex flex-col lg:flex-row my-9 mx-auto gap-5 justify-center">
        <div className="container lg:basis-7/12 md:w-4/5 md:mx-auto lg:mx-0 flex flex-col gap-3">
          <Stories />
          {posts?.map((post, key) => {
            return <Post post={post} key={key} />;
          })}
          {/* <Post /> */}
        </div>
        <div className="hidden lg:flex basis-4/12 flex-col my-5 gap-4 ">
          <div className="flex gap-3 items-center ">
            <img
              src={userSelector.avatar_url}
              alt=""
              className="rounded-full w-16 h-16 object-cover"
            />
            <div className="flex flex-col">
              <div className="font-medium">{userSelector.username}</div>
              <div className="text-gray-400">{userSelector.name}</div>
            </div>
            <div className="flex-auto flex justify-end font-medium text-xs text-sky-500">
              Switch
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="font-medium text-gray-500 text-sm">
                Suggestion For You
              </div>
              <div className="font-medium text-xs">See All</div>
            </div>
            <div className="flex gap-3 items-center ">
              <img
                src="/assets/s1.jpg"
                alt=""
                className="rounded-full w-12 h-12 p-1"
              />
              <div className="flex flex-col">
                <div className="font-medium text-sm">brilian.s</div>
                <div className="text-gray-400 text-xs">
                  Followed by tisnaegar + 4 more
                </div>
              </div>
              <div className="flex-1 flex justify-end font-medium text-xs text-sky-500">
                Follow
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <img
                src="/assets/s2.jpg"
                alt=""
                className="rounded-full w-12 h-12 p-1"
              />
              <div className="flex flex-col">
                <div className="font-medium text-sm">fahdani</div>
                <div className="text-gray-400 text-xs">
                  Followed by tisnaegar + 2 more
                </div>
              </div>
              <div className="flex-1 flex justify-end font-medium text-xs text-sky-500">
                Follow
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <img
                src="/assets/s3.jpg"
                alt=""
                className="rounded-full w-12 h-12 p-1"
              />
              <div className="flex flex-col">
                <div className="font-medium text-sm">dustinw</div>
                <div className="text-gray-400 text-xs">
                  Followed by jasonKarjadi147 + 4 more
                </div>
              </div>
              <div className="flex-1 flex justify-end font-medium text-xs text-sky-500">
                Follow
              </div>
            </div>
          </div>
          <div className="flex flex-wrap text-gray-400 text-xs items-center gap-0.5">
            <a href="">About</a>
            {/* 2027 */}
            <div className="before:content-['\2027']"></div>
            <a href="">Help</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Press</a>
            <div className="before:content-['\2027']"></div>
            <a href="">API</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Jobs</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Privacy</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Terms</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Locations</a>
            <div className="before:content-['\2027']"></div>
            <a href="">Language</a>
          </div>
          <div className="text-xs text-gray-400">
            © 2022 INSTAGRAM FROM META
          </div>
        </div>
      </main>

      <BottomBar user={userSelector} />
    </div>
  );
}

{
  /* <>
<nav className="sticky top-0">
  <div className="sm:hidden">
    <NavBar />
    <BottomBar />
  </div>
</nav> */
}

{
  /* max-w-5xl pt-8*/
}
{
  /* <div className="container mb-9">
  <Stories />
  <Post />
  <Post />
</div>
</> */
}
