import React from "react";
// import {Routes,Route, Link} from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import {Link} from 'react-router-dom'
import { useState } from "react";
function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  return (
    <div className="h-16 w-full bg-blue-900 flex text-white justify-between p-4 items-center">
      <div className="text-xl ">
        <div className="">
          <img
            src="https://images.shiksha.com/mediadata/images/1653047204php2C7m4l.jpeg"
            className="h-10 w-10 rounded-full "
          ></img>
        </div>
      </div>

      <div className=" gap-10 text-lg hidden lg:flex">
        <h1 className="hover:bg-gray-200">HOME</h1>
        <h1 className="hover:bg-gray-200">ABOUT US</h1>
        <h1 className="hover:bg-gray-200">PRODUCT</h1>
        <h1 className="hover:bg-gray-200">CONTACT</h1>
      </div>

      <div className="text-lg lg:block">
        <button className="hover:bg-zinc-400">Login</button>
      </div>
      <div
        className="text-3xl p-2 border-1 border-gray-50 lg:hidden relative"
        onClick={() => setdropdown((prev) => !prev)}
      >
        {dropdown ? (
          <i className="fa-solid fa-xmark bg-red-500"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}

        {dropdown && (
          <div className="gap-10 text-lg lg:flex absolute-left-20 bg-slate-400 top-14 w-60">
            <h1 className="hover:bg-gray-200 ">HOME</h1>
            <h1 className="hover:bg-gray-200">ABOUT US</h1>
            <h1 className="hover:bg-gray-200">PRODUCT</h1>
            <h1 className="hover:bg-gray-200">CONTACT</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
