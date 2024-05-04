import React, { useState } from "react";
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [LsidebarOpen, setLsidebarOpen] = useState(false);
  const toggleLSideBar = () => setLsidebarOpen(!LsidebarOpen)

  const [RsidebarOpen, setRsidebarOpen] = useState(false);
  const toggleRSideBar = () => setRsidebarOpen(!RsidebarOpen)

  return(
  <>
    <div className="navbar flex justify-between items-center text-s bg-white z-10 shadow-md font-bold fixed w-full">
      <div className="flex space-x-12 mx-4 items-center">
        <Link to='/' className="navfeatures py-6 cursor-pointer hover:text-orange-400 hover:scale-110">SwiggyLogo</Link>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleLSideBar}>User Location</div>
      </div>
      <div className="flex space-x-12 mx-4">
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Swiggy Corporate</div>
        <Link to='/search' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Search</Link>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Offers</div>
        <Link to='/help' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Help</Link>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleRSideBar}>SignIn</div>
        <Link to='/cart' className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Cart</Link>
      </div>
    </div>
    <LSidebar isOpen={LsidebarOpen} isClose={toggleLSideBar}/>
    <RSidebar isOpen={RsidebarOpen} isClose={toggleRSideBar}/>
  </>
  )
};

export default Navbar;