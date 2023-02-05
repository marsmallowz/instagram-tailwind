import { useCallback, useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import BottomBar from "../components/BottomBar";
import ModalNewPost from "../components/modalNewPost";
import NavBar from "../components/NavBar";
import Post from "../components/Post";

import Stories from "../components/Stories";
import usePosts from '../hooks/usePosts'

export default function Home() {
  const userSelector = useSelector((state) => state.auth);
  const [showModalNewPost, setShowModalNewPost] = useState(false);
  const [additionalPosts, setAdditionalPosts] = useState([]);

  const [pageNum, setPageNum] = useState(0)
  const {
    isLoading,
    isError,
    error,
    results,
    hasNextPage
  } = usePosts(pageNum)

  const intObserver = useRef()




  const lastPostRef = useCallback(post => {
    if (isLoading) return

    if (intObserver.current) intObserver.current.disconnect()

    intObserver.current = new IntersectionObserver(posts => {
      if (posts[0].isIntersecting && hasNextPage) {
        console.log('We are near the last post!')
        setPageNum(prev => prev + 4)
      }
    })

    if (post) intObserver.current.observe(post)
  }, [isLoading, hasNextPage])

  const content = results.map((post, i) => {
    console.log("key contentpost");
    console.log(post.id);
    const checked = post.likes?.find((val) => {
      return val.id === userSelector.id;
    });
    post.liked = checked ? true : false;
    if (results.length === i + 1) {
      return <Post ref={lastPostRef} key={post.id} post={post} user={userSelector} />
    }
    return <Post key={post.id} post={post} user={userSelector} />
  })

  const newPosts = additionalPosts.map((post) => {
    console.log("key newPosts");
    console.log(post.id);
    return <Post key={post.id} post={post} user={userSelector} />
  })




  return (
    <div className="flex flex-col bg-slate-50 sm:flex-row">
      <NavBar user={userSelector} setShowModalNewPost={setShowModalNewPost} />
      {/* max-w-5xl pt-8*/}
      <main className="w-full my-9 mx-auto flex flex-col justify-center gap-5 lg:flex-row ">
        {/* lg:mx-0 container */}
        <div className="flex flex-col gap-3 md:mx-auto md:w-4/5 lg:mx-0 lg:w-4/12 ">
          <Stories />
          {/* {console.log(additionalPosts)} */}
          {newPosts}
          {content}
        </div>
        <div className="my-5 hidden w-2/12 flex-col gap-4 lg:flex ">
          <div className="flex items-center gap-3 ">
            <img
              src={userSelector.avatarUrl}
              alt=""
              className="h-16 w-16 rounded-full object-contain"
            />
            <div className="flex flex-col">
              <div className="font-medium">{userSelector.username}</div>
              <div className="text-gray-400">{userSelector.name}</div>
            </div>
            <div className="flex flex-auto justify-end text-xs font-medium text-sky-500">
              Switch
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-500">
                Suggestion For You
              </div>
              <div className="text-xs font-medium">See All</div>
            </div>
            <div className="flex items-center gap-3 ">
              <img
                src="/assets/s1.jpg"
                alt=""
                className="h-12 w-12 rounded-full p-1"
              />
              <div className="flex flex-col">
                <div className="text-sm font-medium">brilian.s</div>
                <div className="text-xs text-gray-400">
                  Followed by tisnaegar + 4 more
                </div>
              </div>
              <div className="flex flex-1 justify-end text-xs font-medium text-sky-500">
                Follow
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img
                src="/assets/s2.jpg"
                alt=""
                className="h-12 w-12 rounded-full p-1"
              />
              <div className="flex flex-col">
                <div className="text-sm font-medium">fahdani</div>
                <div className="text-xs text-gray-400">
                  Followed by tisnaegar + 2 more
                </div>
              </div>
              <div className="flex flex-1 justify-end text-xs font-medium text-sky-500">
                Follow
              </div>
            </div>
            <div className="flex items-center gap-3 ">
              <img
                src="/assets/s3.jpg"
                alt=""
                className="h-12 w-12 rounded-full p-1"
              />
              <div className="flex flex-col">
                <div className="text-sm font-medium">dustinw</div>
                <div className="text-xs text-gray-400">
                  Followed by jasonKarjadi147 + 4 more
                </div>
              </div>
              <div className="flex flex-1 justify-end text-xs font-medium text-sky-500">
                Follow
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-0.5 text-xs text-gray-400">
            <button>About</button>
            <div>&#8231;</div>
            <button>Help</button>
            <div>&#8231;</div>
            <button>Press</button>
            <div>&#8231;</div>
            <button>API</button>
            <div>&#8231;</div>
            <button>Jobs</button>
            <div>&#8231;</div>
            <button>Privacy</button>
            <div>&#8231;</div>
            <button>Terms</button>
            <div>&#8231;</div>
            <button>Locations</button>
            <div>&#8231;</div>
            <button>Language</button>
          </div>
          <div className="text-xs text-gray-400">
            © 2022 INSTAGRAM FROM META
          </div>
        </div>
      </main>

      <BottomBar user={userSelector} />
      <ModalNewPost
        isVisible={showModalNewPost}
        closeModalNewPost={() => setShowModalNewPost(false)}
        setAdditionalPosts={setAdditionalPosts}
        additionalPosts={additionalPosts}
      />
    </div>
  );
}
