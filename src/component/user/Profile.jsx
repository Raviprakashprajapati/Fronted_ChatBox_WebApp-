import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../store/redux-features/userSlice'
import { useNavigate } from 'react-router-dom'

function Profile() {

    const user = useSelector(selectCurrentUser)
    
    const navigate = useNavigate()
    
  return (
    <div>
        <div className="relative top-10 flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[90%] md:w-[50%] m-auto">
            <br />
        <div className="w-[10rem] md:w-[15rem] m-auto">
            <img src={user?.profileImage || "https://avatar.iran.liara.run/public/boy"} alt="profile-picture" />
        </div>

        <div className="p-6 text-center">
            <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {user?.fullName}
            </h4>
            <p
            className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400 bg-black">
            {user?.username}
            </p>

           <div className='mt-7'>
           <p
            className=" inline bg-red-600 hover:bg-red-800 text-white p-3 rounded-lg   " onClick={()=>navigate("/")}>
            Logout
            </p>
           </div>
        </div>
        <div className="flex justify-center p-6 pt-2 gap-7">
            <a href="#facebook"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400">
            <i className="fab fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#twitter"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-light-blue-600 to-light-blue-400">
            <i
                className="fab fa-twitter" aria-hidden="true">
            </i>
            </a>
            <a href="#instagram"
            className="block font-sans text-xl antialiased font-normal leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-purple-400"><i
                className="fab fa-instagram" aria-hidden="true">
            </i>
            </a>
        </div>
        </div>
    </div>
  )
}

export default Profile
