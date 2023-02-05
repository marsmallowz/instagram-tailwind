import { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { axiosInstance } from "../config/config";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ModalNewPost({ isVisible, closeModalNewPost, setAdditionalPosts, additionalPosts }) {
    const [listPhoto, setlistPhoto] = useState([]);
    const [crop, setCrop] = useState(false);
    const [edit, setEdit] = useState(false);
    const [inputVideoPhoto, setInputVideoPhoto] = useState(true);
    const [posting, setPosting] = useState(false);



    if (!isVisible) return null;
    function closeModalNewPostOnWrapper(e) {
        if (e.target.id === "wrapper") closeModalNewPost();
    }
    return (
        <div
            id="wrapper"
            onClick={closeModalNewPostOnWrapper}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-70"
        >
            {inputVideoPhoto ?

                <InputMedia setlistPhoto={setlistPhoto} setCrop={setCrop} setInputVideoPhoto={setInputVideoPhoto} /> :
                crop ?
                    <CropMedia listPhoto={listPhoto} setCrop={setCrop} setEdit={setEdit} /> :
                    edit ?
                        <EditMedia listPhoto={listPhoto} setPosting={setPosting} setEdit={setEdit} /> :
                        posting ?
                            <PostMedia listPhoto={listPhoto} closeModalNewPost={closeModalNewPost} setPosting={setPosting} setAdditionalPosts={setAdditionalPosts} additionalPosts={additionalPosts} /> :
                            <div>loading</div>
            }
        </div>
    );
}

function InputMedia(props) {
    return (
        <div className="flex flex-col h-2/3  w-11/12 2xl:w-2/5 2xl:h-5/6 bg-white rounded-2xl">
            <div className="text-center py-2">Buat postingan baru</div>
            <hr />
            <div className="flex grow flex-col items-center justify-center gap-5">
                <FaPhotoVideo className="h-20 w-24" />
                <div className="flex flex-col items-center justify-center gap-5  ">
                    <label htmlFor="tambahFoto">
                        Seret foto dan video di sini
                    </label>
                    <div className="relative">
                        <input type="file"
                            multiple
                            id="tambahFoto"
                            name="tambahFoto"
                            onChange={e => {
                                props.setlistPhoto(e.target.files)
                                console.log("e.target.files");
                                console.log(e.target.files);
                                props.setCrop(true);
                                props.setInputVideoPhoto(false);
                            }
                            }
                            className="block h-12 w-96 rounded border border-gray-500 py-2 px-3 text-sm focus:border-2 focus:border-blue-600 focus:outline-none" placeholder="Image URL"
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}

function CropMedia(props) {
    return (
        <div className="flex flex-col h-2/3 w-11/12 2xl:w-2/5 2xl:h-5/6 bg-white rounded-2xl transition-all">
            <div className="flex justify-between py-2 px-3">
                <div className="w-1/3">Back</div>
                <div className="font-medium">
                    Pangkas
                </div>
                <div onClick={() => {
                    props.setEdit(true);
                    props.setCrop(false);
                }} className="w-1/3 text-right text-blue-400 font-medium">
                    Selanjutnya
                </div>
            </div>
            <hr />
            <div className="w-full h-full">
                <img src={props.listPhoto[0] ? URL.createObjectURL(props.listPhoto[0]) : null} alt="" className="w-full h-full object-cover rounded-b-2xl" />
            </div>
        </div>
    );
}

function EditMedia({ listPhoto, setPosting, setEdit }) {
    return (
        <div className="flex flex-col h-5/6 2xl:w-3/5 w-11/12 bg-white rounded-2xl transition-all">
            <div className="flex justify-between py-2 px-3">
                <div className="w-1/3">Back</div>
                <div className="font-medium">
                    Edit
                </div>
                <div onClick={() => {
                    setPosting(true);
                    setEdit(false);
                }} className="w-1/3 text-right text-blue-400 font-medium cursor-pointer">
                    Selanjutnya
                </div>
            </div>
            <hr />
            <div className="flex h-full items-center justify-center rounded-2xl">
                <div className="basis-2/3  w-full h-full">
                    <img src={listPhoto[0] ? URL.createObjectURL(listPhoto[0]) : null} alt="" className="w-full h-full object-cover rounded-bl-2xl" />
                </div>
                <div className="flex h-full basis-1/3 flex-col">
                    <div className="flex justify-around py-2">
                        <div className="basis-1/2 border-b-2 border-black text-center">Filter</div>
                        <div className="basis-1/2 border-b text-center">Penyesuaian</div>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-4 gap-4 p-2">
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover border-2 border-blue-400" />
                            <div className="text-sm text-blue-400 font-medium">Asli</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover contrast-[1.2] brightness-100 saturate-[1.25]" />
                            <div className="text-sm text-gray-400">Claredon</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover hue-rotate-[360deg]" />
                            <div className="text-sm text-gray-400">Gingham</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-[1.4] contrast-[.95] saturate-0 sepia-[.35]" />
                            <div className="text-sm text-gray-400">Moon</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-[1.3] contrast-[1.2] saturate-[1.25] sepia-[.325]" />
                            <div className="text-sm text-gray-400">Lark</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-125 contrast-75 saturate-[1.4] sepia-[.75]" />
                            <div className="text-sm text-gray-400">Reyes</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-[1.15] contrast-[1.15] saturate-[1.8] sepia-[.35]" />
                            <div className="text-sm text-gray-400">Juno</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover  contrast-125 saturate-[1.25] sepia-[.35]" />
                            <div className="text-sm text-gray-400">Slumber</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-[1.15] contrast-125 hue-rotate-[-2deg] saturate-[.9] sepia-[.5]" />
                            <div className="text-sm text-gray-400">Crema</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-105 contrast-[1.05] saturate-[2] sepia-[.25]" />
                            <div className="text-sm text-gray-400">Ludwig</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-[1.15]  saturate-[1.4] sepia-[.2]" />
                            <div className="text-sm text-gray-400">Aden</div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="/assets/air_ballon2.webp" alt="" className="aspect-square object-cover brightness-125 contrast-[1.1] saturate-[1.1]" />
                            <div className="text-sm text-gray-400">Perptua</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function PostMedia(props) {
    const userSelector = useSelector((state) => state.auth);
    const navigate = useNavigate();

    const [keterangan, setKeterangan] = useState("")
    let formData = new FormData();
    const [lokasi, setLokasi] = useState("false")

    async function postNewPost() {
        Array.from(props.listPhoto).forEach(selectedFile => {
            console.log("selectedFile");
            console.log(selectedFile);

            formData.append(
                "image",
                selectedFile,
            );
        })
        formData.append(
            "id",
            0,
        );
        formData.append(
            "caption",
            keterangan,
        );
        formData.append(
            "userId",
            userSelector.id,
        );
        console.log("formData");
        console.log(formData);
        console.log(props.listPhoto);

        // props.listPhoto.foreach((selectedFile) => {
        //     formData.append(
        //         "image",
        //         selectedFile,
        //         selectedFile.name
        //     );
        // })
        // const res = await axiosInstance.post("/posts", { id: 0, caption: keterangan, userId: userSelector.id, ...formData });
        const res = await axiosInstance.post("/posts", formData);
        console.log("mystatus");
        console.log(res.status);
        if (res.status === 200) {
            props.setAdditionalPosts([...props.additionalPosts, {
                "id": 90,
                "caption": "Ini diatas woy",
                "createdAt": "2023-02-31T07:32:19.000Z",
                "updatedAt": "2023-02-31T07:32:19.000Z",
                "userId": 1,
                "User": {
                    "username": "massandz",
                    "avatarUrl": "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg"
                },
                "photos": [
                    {
                        "id": 100,
                        "url": "http://localhost:2600/post-image/POST_SuPJ7kap3VZQRcas94Gv1.jpeg"
                    }
                ],
                "likes": [],
                "comments": []
            },])
            navigate("/", { replace: true });
        }
    }

    return (<div className="flex flex-col h-4/6  w-11/12 2xl:w-3/5 2xl:h-5/6 bg-white rounded-2xl transition-all">
        <div className="flex justify-between py-2 px-3">
            <div className="w-1/3">Back</div>
            <div className="font-medium">
                Buat Postingan Baru
            </div>
            <div onClick={() => {
                props.setPosting(false);
                postNewPost();
                setTimeout(() => {
                    props.closeModalNewPost();
                }, 3000);
            }} className="w-1/3 text-right text-blue-400 font-medium cursor-pointer">
                Bagikan
            </div>
        </div>
        <hr />
        <div className="flex h-full items-center justify-center rounded-2xl">
            <div className="basis-2/3  w-full h-full">
                <img src={props.listPhoto[0] ? URL.createObjectURL(props.listPhoto[0]) : null} alt="" className="w-full h-full object-cover rounded-bl-2xl" />
            </div>
            <div className="flex flex-col h-full basis-1/3 divide-y">
                <div className="flex flex-col gap-3 p-3">
                    <div className="flex h-12 gap-3 items-center">
                        <div className="h-full">
                            <img src="assets/1.jpg" alt="" className=" h-full rounded-full object-cover" />
                        </div>
                        <div className="font-medium">massandz</div>
                    </div>
                    <textarea name="keterangan" placeholder="Tulis Keterangan..." id="" cols="30" rows="8" onChange={e => {
                        setKeterangan(e.target.value);
                    }} className="outline-none">
                    </textarea>
                </div>
                <input type="text" placeholder="Tambahkan Lokasi" onChange={e => {
                    setLokasi(e.target.value);
                }} className="outline-none p-3" />
                <div className="flex p-3 items-center justify-between">
                    <div>Aksesibilitas</div>
                    <BsChevronDown />
                </div>
                <div className="flex p-3 items-center justify-between">
                    <div>Pengaturan Lanjutan</div>
                    <BsChevronDown />
                </div>
            </div>
        </div>
    </div>);
}