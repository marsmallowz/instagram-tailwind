import { AiFillHeart } from "react-icons/ai";
import { BiShare, BiComment, BiBookmark } from "react-icons/bi";

export default function Post(props) {
  return (
    <div
      className="sm:border sm:mb-5 mb-3 rounded-lg  border-slate-200  bg-white"
      key={props.key}
    >
      <div className="p-3 flex flex-row">
        <div className="flex-1">
          <a href="" className="">
            <img
              className="inline rounded-full w-10 h-10 object-cover"
              src={props.post.avatar_url}
              alt=""
            />
            <span className="font-medium text-sm ml-2">
              {props.post.username}
            </span>
          </a>
        </div>
      </div>
      <img className="w-full" src={props.post.image_url} alt="japan" />
      <div className="p-3 flex flex-row text-2xl h-12">
        <div className="flex-1 ">
          <div className="flex flex-row">
            <a className="mr-3 cursor-pointer " href="">
              <AiFillHeart className="fill-rose-600 w-7 h-7" />
            </a>
            <a className="mr-3 cursor-pointer " href="">
              <BiComment className="w-7 h-7" />
            </a>
            <a className="mr-3 cursor-pointer" href="">
              <BiShare className="w-7 h-7" />
            </a>
          </div>
          {/* text-red-600 */}
        </div>
        <div className="">
          <a className="mr-3 cursor-pointer" href="">
            <BiBookmark className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="font-medium text-sm px-3 mb-1">
        {props.post.number_of_likes} likes
      </div>
      <div className="text-sm px-3 mb-1">
        <span className="font-medium">{props.post.username}</span> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Sit, illo ipsam! Nihil
        minus, beatae eum dignissimos dolores dicta, inventore excepturi
        exercitationem atque eius!
      </div>
      <div className="text-sm text-gray-400 px-3 cursor-pointer">
        <a href="">View all {props.post.comments.length} comments</a>
      </div>
      <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-1">
        23 hours ago
      </div>
    </div>
  );
}

// return (
//   <div className="sm:border sm:mb-5 mb-3 rounded-lg  border-slate-200  bg-white">
//     <div className="p-3 flex flex-row">
//       <div className="flex-1">
//         <a href="" className="">
//           <img
//             className="rounded-full w-8 inline"
//             src="/assets/2.jpg"
//             alt="jk"
//           />
//           <span className="font-medium text-sm ml-2">Kjason</span>
//         </a>
//       </div>
//     </div>
//     <img className="w-full" src="/assets/japan.jpg" alt="japan" />
//     <div className="p-3 flex flex-row text-2xl h-12">
//       <div className="flex-1 ">
//         <div className="flex flex-row">
//           <a className="mr-3 cursor-pointer " href="">
//             <AiFillHeart className="fill-rose-600 w-7 h-7" />
//           </a>
//           <a className="mr-3 cursor-pointer " href="">
//             <BiComment className="w-7 h-7" />
//           </a>
//           <a className="mr-3 cursor-pointer" href="">
//             <BiShare className="w-7 h-7" />
//           </a>
//         </div>
//         {/* text-red-600 */}
//       </div>
//       <div className="">
//         <a className="mr-3 cursor-pointer" href="">
//           <BiBookmark className="w-7 h-7" />
//         </a>
//       </div>
//     </div>
//     <div className="font-medium text-sm px-3 mb-1">1,001 likes</div>
//     <div className="text-sm px-3 mb-1">
//       <span className="font-medium">Kjason</span> Lorem ipsum dolor sit amet
//       consectetur adipisicing elit. Sit, illo ipsam! Nihil minus, beatae eum
//       dignissimos dolores dicta, inventore excepturi exercitationem atque
//       eius!
//     </div>
//     <div className="text-sm text-gray-400 px-3 cursor-pointer">
//       <a href="">View all 141 comments</a>
//     </div>
//     <div className="text-gray-500 uppercase p-3 text-xs tracking-wide mt-1">
//       23 hours ago
//     </div>
//   </div>
// );
