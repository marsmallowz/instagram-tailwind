import React from 'react'
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import { BiShare, BiComment, BiBookmark } from "react-icons/bi";
import { axiosInstance } from "../config/config";

const Post = React.forwardRef((props, ref) => {

    const [comment, setComment] = useState("")
    const [post, setPost] = useState(props.post)
    const [showComments, setShowComments] = useState(false)

    async function likePost(params) {
        console.log("post.liked");
        console.log(post.liked);
        const data = {
            postId: post.id,
            userId: props.user.id,
            liked: !post.liked,
        }
        try {
            await axiosInstance.patch(`posts/liked`, data);

            if (post.liked) {
                const newListLike = [...post.likes]
                newListLike.pop()
                console.log("post.likes");

                console.log(post.likes);
                setPost({
                    ...post,
                    likes: newListLike,
                    liked: false
                })
            } else {
                setPost({
                    ...post,
                    likes: [...post.likes, { id: props.user.id, username: props.user.username }],
                    liked: true
                })

            }
        } catch (error) {
        }
    }


    async function submitComment() {
        try {
            const res = await axiosInstance.post("/comments", { comment: comment, userId: props.user.id, postId: post.id });
            setComment("")
            setPost({
                ...post, "comments": [...post.comments, {
                    id: res.data.id,
                    comment: res.data.comment,
                    updatedAt: res.data.updatedAt,
                    User: {
                        username: res.data.username, avatarUrl: res.data.avatarUrl
                    }
                }]
            })
        } catch (error) {

        }

    }
    return (
        <div
            className="w-full mb-3 rounded-lg border-slate-200 bg-white sm:mb-5 sm:border"
            // key={props.key}
            ref={ref}
        >
            <div className="flex flex-row p-3">
                <div className="flex-1">
                    <button href="" className="">
                        <img
                            className="inline h-10 w-10 rounded-full object-cover"
                            src={`${post.User.avatarUrl}`}
                            alt=""
                        />
                        <span className="ml-2 text-sm font-medium">
                            {post.User.username}
                        </span>
                    </button>
                </div>
            </div>
            <img className="w-full aspect-square object-cover" src={post.photos.length ? post.photos[0].url : null} alt="japan" />
            <div className="flex h-12 flex-row p-3 text-2xl">
                <div className="flex-1 ">
                    <div className="flex flex-row">
                        <button onClick={() => {
                            likePost()
                        }} className="mr-3 cursor-pointer" >
                            {
                                post.liked ?
                                    <AiFillHeart className="h-7 w-7 fill-rose-600" /> :
                                    <AiOutlineHeart className="h-7 w-7" />
                            }
                        </button>
                        <button className="mr-3 cursor-pointer " href="">
                            <BiComment className="h-7 w-7" />
                        </button>
                        <button className="mr-3 cursor-pointer" href="">
                            <BiShare className="h-7 w-7" />
                        </button>
                    </div>
                </div>
                <div className="">
                    <button className="mr-3 cursor-pointer" href="">
                        <BiBookmark className="h-7 w-7" />
                    </button>
                </div>
            </div>
            <div className="mb-1 px-3 text-sm font-medium">
                {post.likes.length} likes
            </div>
            <div className="mb-1 px-3 text-sm">
                <span className="font-medium">{post.username}</span> {post.caption}
            </div>
            <div className={`flex ${showComments ? "flex-col-reverse" : "flex-col"} gap-5`}>
                <div className="cursor-pointer px-3 text-sm text-gray-400">
                    <button onClick={() => {
                        setShowComments(!showComments)
                    }}>{showComments ? "Hide" : "View"} all {post.comments.length} comments</button>
                </div>
                {
                    !showComments ? null :
                        <div className="w-full flex flex-col px-3 gap-3 mt-2">
                            {post.comments.map((comment, key) => {
                                return (
                                    <div key={key} className="w-full flex items-center justify-between">
                                        <div className="flex gap-2 basis-11/12">
                                            <div className="basis-1/12">
                                                <img src={comment.User?.avatarUrl} alt="" className="w-10 h-10 rounded-full aspect-square object-cover" />
                                            </div>
                                            <div className="flex flex-col justify-between basis-11/12 gap-2">
                                                <p className="text-sm ">
                                                    <span className="font-semibold text-sm mr-1">{comment.User?.username}</span>
                                                    {comment.comment}</p>
                                                <div className="flex text-gray-400 text-xs gap-3">
                                                    <div>19m</div>
                                                    <div className="font-semibold">4 likes</div>
                                                    <div className="font-semibold">Reply</div>
                                                    <div className="font-semibold">See translation</div>
                                                </div>
                                            </div>
                                        </div>
                                        <AiOutlineHeart className="w-5 h-5 text-color basis-1/12" />
                                    </div>)
                            })
                            }
                        </div>
                }
            </div>

            <div className="mt-1 p-3 text-xs uppercase tracking-wide text-gray-500">
                23 hours ago
            </div>
            <hr />
            <div className="flex items-center justify-between p-3">
                <div className="flex-auto flex items-center justify-between gap-2">
                    <AiOutlineSmile className="h-8 w-8" />
                    <input type="text" placeholder="Tambahkan Komentar..."
                        onChange={(e) => {
                            setComment(e.target.value);
                        }}
                        value={comment}
                        className="w-full outline-none" />
                </div>
                <button className="text-blue-500 cursor-pointer disabled:text-gray-400" disabled={comment ? false : true} onClick={() => {
                    submitComment()
                }}>Kirim</button>
            </div>
        </div>
    );
})

export default Post





