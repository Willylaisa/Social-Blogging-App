import React from "react"
import Navbar from "./Navbar"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import Blog from "./pages/Blog"
import Signup from "./pages/signup"
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
    <>
      <Navbar className="navbar"/>
      <div>
        <Routes>
          <Route path="/" element={<Blog />}/>
          <Route path="/Social-Blogging-App/" element={<Blog />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </div>
    </>
  )
}


