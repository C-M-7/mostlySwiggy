import React, { useEffect, useState } from "react";
import RSidebar from "./RSidebar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import searchSVG from "../../Utils/searchSVG.svg";
import helpSVG from "../../Utils/helpSVG.svg";
import signinSVG from "../../Utils/signinSVG.svg";
import cartSVG from "../../Utils/cartSVG.svg";

const Navbar = () => {
  const [RsidebarOpen, setRsidebarOpen] = useState(false);
  const toggleRSideBar = () => setRsidebarOpen(!RsidebarOpen);
  const cartData = useSelector((state) => state.CartSlice);
  const [appearance, setAppearance] = useState(false);
  
  useEffect(()=>{
    if(cartData.length > 0){
      setAppearance(true);
    }
    else{
      setAppearance(false);
    }
  },[cartData])

  return (
    <>
      <div>
        <RSidebar isOpen={RsidebarOpen} isClose={toggleRSideBar} />
        {RsidebarOpen && (
          <div
            className="fixed bg-gray-400 bg-opacity-30 h-screen w-screen backdrop-filter backdrop-blur-sm z-30"
            onClick={toggleRSideBar}
          ></div>
        )}
        <div
          className={`flex justify-between items-center text-s z-10 bg-white shadow-md font-bold fixed w-full`}
        >
          <div className="flex mx-10 items-center">
            <Link
              to="/"
              className="navfeatures py-6 cursor-pointer hover:text-orange-400 transition"
            >
              mostlySwiggy
            </Link>
          </div>
          <div className="flex space-x-36 mx-20 ">
            <span className="flex items-center space-x-1 cursor-pointer">
              <img src={searchSVG} className="h-5 w-5" />
              <Link to="/search" className="navfeatures py-6">
                Search
              </Link>
            </span>
            <span className="flex items-center space-x-1 cursor-pointer">
              <img src={helpSVG} className="h-5 w-5" />
              <Link
                to="/help"
                className="navfeatures py-6 cursor-pointer"
              >
                Help
              </Link>
            </span>
            <span className="flex items-center space-x-1 cursor-pointer">
              <img src={signinSVG} className="h-5 w-5" />
              <div
                className="navfeatures py-6 cursor-pointer"
                onClick={toggleRSideBar}
              >
                SignIn
              </div>
            </span>
            <span className="flex items-center space-x-1 cursor-pointer">
              <img src={cartSVG} className='h-5 w-5' />
              <Link
                to="/cart"
                className={`${appearance ? 'text-orange-400' : 'text-black'} py-6 cursor-pointer`}
              >
                Cart
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
