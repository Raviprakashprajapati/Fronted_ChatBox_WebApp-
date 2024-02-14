import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../api/authApi.js";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/redux-features/userSlice.js";

export default function Login() {


  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const naviagte  = useNavigate()
  const [flag,setFlag] = useState(false)
  const dispatch = useDispatch()

  // useEffect(()=>{},[flag,setFlag])


  function handleSubmit(e){
    e.preventDefault()
    if(username.length>1 && password.length>1){
       
      LoginAPI({username,password})
      .then((value)=>{
          // console.log(value)

          localStorage.clear()
          localStorage.setItem("user",JSON.stringify(value.data?.user))
          localStorage.setItem("accessToken",value.data?.accessToken)
          dispatch(setCurrentUser(value?.data?.user))
          naviagte("/profile")
          // setFlag(!flag)
      })
      .catch((err)=>{
        console.log("errro in login API: " + err)
      })


    }
  }

  return (
    <div>
      <div className="mt-20 mb-10" >
    <div className="bg-white p-8 rounded-lg shadow-md w-[90%] md:w-[35%] m-auto">
            <h2 className="text-2xl font-semibold text-white bg-black p-3 rounded-lg mb-6 text-center">Login Page</h2>

            <form >
                <div className="mb-4">
                    <label for="username" className="block text-sm font-medium text-gray-600">Username</label>
                    <input type="text" id="username" name="username" className="mt-1 p-3 w-full border rounded-md focus:outline-none text-black focus:border-blue-500" placeholder="Enter your username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    required/>
                </div>

                <div className="mb-4">
                    <label for="password" className="block text-sm font-medium text-gray-600">Password</label>
                    <input type="password" id="password" name="password" className="mt-1 p-3 w-full border text-black rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required/>
                </div>

                <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white p-3 rounded-md w-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
                    Login
                </button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
                Don't have an account? <a  onClick={()=>navigate("/sign-up")} className="text-blue-500">Sign up</a>
            </p>
     </div>
    </div>
    </div>
  );
}

