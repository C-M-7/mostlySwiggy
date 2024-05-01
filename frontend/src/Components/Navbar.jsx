import React, { useState } from "react";
import LSidebar from "./LSidebar";
import RSidebar from "./RSidebar";

const Navbar = () => {
  const [LsidebarOpen, setLsidebarOpen] = useState(false);
  const toggleLSideBar = () => setLsidebarOpen(!LsidebarOpen)

  const [RsidebarOpen, setRsidebarOpen] = useState(false);
  const toggleRSideBar = () => setRsidebarOpen(!RsidebarOpen)

  return(
  <>
    <div className="navbar flex justify-between items-center text-s bg-white shadow-md font-bold">
      <div className="flex space-x-12 mx-4 items-center">
        <div className="navfeatures py-6 cursor-pointer hover:text-orange-400">SwiggyLogo</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleLSideBar}>User Location</div>
      </div>
      <div className="flex space-x-12 mx-4">
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Swiggy Corporate</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Search</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Offers</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Help</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleRSideBar}>SignIn</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Cart</div>
      </div>
    </div>
    <LSidebar isOpen={LsidebarOpen} isClose={toggleLSideBar}/>
    <RSidebar isOpen={RsidebarOpen} isClose={toggleRSideBar}/>
  </>
  )
};

export default Navbar;