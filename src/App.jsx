import React from "react";
import Login from "./component/auth/Login";
import SignUp from "./component/auth/SignUp";
import Profile from "./component/user/Profile";
import Navbar from "./component/Utils/Navbar";
import AllUsers from "./component/user/AllUsers";
import ChatWithUser from "./component/user/ChatWithUser";
import { BrowserRouter, Route, Router, Routes, useLocation } from "react-router-dom";

export default function App() {

  return (
    <BrowserRouter>
      <NavbarOnRoute/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/user" element={<AllUsers />} />

        <Route path="/chat/:id/:name" element={<ChatWithUser />} />
      </Routes>
    </BrowserRouter>
  );
}


function NavbarOnRoute(){

  const location = useLocation()
  const pathWithoutRoute = ["/","/sign-up"]
  

  return !pathWithoutRoute.includes(location.pathname)?<Navbar/>:null 

}

