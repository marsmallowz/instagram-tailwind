import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { axiosInstance } from "../config/config";

export default function EditProfile(params) {
    const navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth);
    const [showModalNewPost, setShowModalNewPost] = useState(false);
    const [username, setUsername] = useState(userSelector.username)
    const [fullname, setFullname] = useState(userSelector.fullname)
    const [phoneNumber, setPhoneNumber] = useState(userSelector.phoneNumber)
    const [email, setEmail] = useState(userSelector.email)
    const [avatarPhoto, setAvatarPhoto] = useState(null)

    let formData = new FormData();

    async function submitChanged(params) {
        if (avatarPhoto) {
            formData.append(
                "image",
                avatarPhoto,
            );
        }
        formData.append(
            "fullname",
            fullname,
        );
        formData.append(
            "username",
            username,
        );
        formData.append(
            "phoneNumber",
            phoneNumber,
        );
        const result = await axiosInstance.patch(`/users/${userSelector.id}`, formData)
        if (result.status === 200) {
            navigate("/account/edit", { replace: true });
        }
    }


    return <div className="flex flex-col bg-slate-50 sm:flex-row">
        <NavBar user={userSelector} setShowModalNewPost={setShowModalNewPost} />
        <main className="w-1/2 my-5 mx-auto flex flex-col justify-center lg:flex-row border-2 divide-x-2 bg-white">
            <div className="basis-1/4 flex flex-col ">
                <div className="border-l-2 p-2 border-black">Edit Profile</div>
            </div>
            <div className="basis-3/4 flex flex-col gap-5 py-9">
                <div className="flex justify-center gap-7 items-center">
                    <div className="basis-1/4 flex flex-row justify-end">
                        <img src={userSelector.avatarUrl} alt="" className="w-12 h-12 rounded-full" />
                    </div>
                    <div className="flex flex-col basis-3/4">
                        <div>{username}</div>
                        <div className="font-semibold text-sky-500 text-sm">Change profile photo</div>
                        <input type="file" hidden onChange={(e) => {
                            setAvatarPhoto(e.target.files[0])
                        }} />
                    </div>
                </div>
                <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Name</div>
                    </div>
                    <div className="basis-3/4 flex flex-col gap-3">
                        <input type="text" placeholder="Name" value={fullname} onChange={(e) => {
                            setFullname(e.target.value)
                        }} className="py-1 px-2 border rounded-sm w-3/5" />
                        <div className="text-xs text-gray-400 w-3/5">Help people discover your account by using the name you're known by: either your full name, nickname, or business name.</div>
                        <div className="text-xs text-gray-400 w-3/5">You can only change your name twice within 14 days.</div>
                    </div>
                </div>
                <div className="flex justify-center gap-7 mt-1">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Username</div>
                    </div>
                    <div className="basis-3/4 flex flex-col gap-3">
                        <input type="text" placeholder="Username" value={username} onChange={(e) => {
                            setUsername(e.target.value)
                        }} className="py-1 px-2 border rounded-sm w-3/5" />
                        <div className="text-xs text-gray-400 w-3/5">In most cases, you'll be able to change your username back to massandz for another 14 days. Learn more</div>
                    </div>
                </div>
                <div className="flex justify-center gap-7 mt-1">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Website</div>
                    </div>
                    <div className="basis-3/4 flex flex-col gap-3">
                        <input type="text" placeholder="Website" disabled={true} className="py-1 px-2 border rounded-sm w-3/5" />
                        <div className="text-xs text-gray-400 w-3/5">Editing your links is only available on mobile.
                            Visit the Instagram app and edit your profile to change the websites in your bio.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-7 mt-1">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Bio</div>
                    </div>
                    <div className="basis-3/4 flex flex-col gap-3">
                        {/* <input type="text" className="py-1 px-2 border rounded-sm w-3/5" /> */}
                        <textarea name="" id="" cols="30" rows="5" className="py-1 px-2 border rounded-sm w-3/5" disabled={true}></textarea>
                        <div className="text-xs text-gray-400 ">0/150</div>
                    </div>
                </div>
                <div className="flex justify-center gap-7 mt-1">
                    <div className="basis-1/4 invisible">
                    </div>
                    <div className="basis-3/4">
                        <div className="text-sm font-medium text-gray-500 w-3/5">
                            Personal information
                        </div>
                        <div className="text-xs text-gray-400 w-3/5">
                            Provide your personal information, even if the account is used for a business, a pet or something else. This won't be a part of your public profile.
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Email</div>
                    </div>
                    <div className="basis-3/4">
                        <input type="text" placeholder="Email" value={email} className="py-1 px-2 border rounded-sm w-3/5" disabled={true} />
                    </div>
                </div>
                <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Phone Number</div>
                    </div>
                    <div className="basis-3/4">
                        <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }} className="py-1 px-2 border rounded-sm w-3/5" />
                    </div>
                </div>
                <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Gender</div>
                    </div>
                    <div className="basis-3/4">
                        <input type="text" placeholder="Gender" disabled={true} className="py-1 px-2 border rounded-sm w-3/5" />
                    </div>
                </div>
                {/* <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 font-medium text-right mt-1.5">
                        <div>Simmiliar account <br /> sugesstion</div>
                    </div>
                    <div className="basis-3/4">
                        <input type="text" placeholder="Name" className="py-1 px-2 border rounded-sm w-3/5" />
                    </div>
                </div> */}
                <div className="flex justify-center gap-7 ">
                    <div className="basis-1/4 invisible">
                    </div>
                    <div className="basis-3/4">
                        <input type="button" value={"Submit"} onClick={() => {
                            submitChanged()
                        }} className="bg-blue-400 py-2 px-3 rounded-md text-white cursor-pointer hover:bg-blue-500" />
                    </div>
                </div>
            </div>
        </main>

    </div>
}