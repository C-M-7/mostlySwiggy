import React, { useState } from "react";
import LSidebar from "./LSidebar";

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleLSideBar = () =>{
    setSidebarOpen(!sidebarOpen);
  }


  return(
  <>
    <div className="navbar flex justify-between items-center text-s bg-white shadow-md font-bold">
      <div className="flex space-x-12 mx-4 items-center">
        <div className="navfeatures py-6 cursor-pointer hover:text-orange-400">SwiggyLogo</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400" onClick={toggleLSideBar}>User Location</div>
      </div>
      <div className="flex space-x-12 mx-4">
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400 ">Swiggy Corporate</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Search</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Offers</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Help</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">SignIn</div>
        <div className="navfeatures py-6 cursor-pointer  hover:text-orange-400">Cart</div>
      </div>
    </div>
    <LSidebar isOpen={sidebarOpen} isClose={toggleLSideBar}/>
  </>
  )
};

export default Navbar;