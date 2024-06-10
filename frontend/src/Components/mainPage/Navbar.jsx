import React, { useState } from "react";
import RSidebar from "./RSidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [RsidebarOpen, setRsidebarOpen] = useState(false);
  const toggleRSideBar = () => setRsidebarOpen(!RsidebarOpen)

  return(
    <>
    <div >
    <RSidebar isOpen={RsidebarOpen} isClose={toggleRSideBar}/>
    {
      RsidebarOpen &&
      <div className="fixed bg-gray-400 bg-opacity-30 h-screen w-screen backdrop-filter backdrop-blur-sm z-30" onClick={toggleRSideBar}></div>
    }
    <div className={`flex justify-between items-center text-s z-10 bg-white shadow-md font-bold fixed w-full`}>
      <div className="flex space-x-12 mx-4 items-center">
        <Link to='/' className="navfeatures py-6 cursor-pointer hover:text-orange-400">SwiggyLogo</Link>
      </div>
      <div className="flex space-x-12 mx-4">
        <Link to='/search' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Search</Link>
        <Link to='/help' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Help</Link>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleRSideBar}>SignIn</div>
        <Link to='/cart' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Cart</Link>
      </div>
    </div>
    </div>
  </>
  )
};

export default Navbar;