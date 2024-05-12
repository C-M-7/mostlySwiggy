import React, { useState } from "react";
import FetchLocation from "../../Config/FetchLocation";
import { useDispatch, useSelector } from "react-redux";
import { setuserlocation } from "../../Redux/slices/UserLocation";
import FetchData from "../../Config/FetchData";
import { setRestaurantData } from "../../Redux/slices/RestaurantsData";

const LSidebar = ({ isOpen, isClose }) => {
  const dispatch = useDispatch();
  // const [position, setPosition] = useState(null);
  
  const getUserData = async (location) =>{
    const response = await FetchData(location);
    console.log(response.data.success.cards);
    // dispatch(setRestaurantData(response));
    // isClose();
  }

  const getUserLocation = async () =>{
    try{
      const location = await FetchLocation();
      console.log(location);
      dispatch(setuserlocation(location));
      // setPosition(location);
      getUserData(location);
    }
    catch(err){
      console.error(err.message);
    }
  }

  return (
    <>
        <div className={`h-screen w-[40%] z-20 shadow-lg top-0 left-0 fixed bg-white flex-col transition-transform duration-300  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-[15%] mx-10 mt-10 ">
            <div onClick={isClose} className="cursor-pointer hover:text-orange-400">Close</div>
            <div>
              <input
                className="h-10 w-[100%] border border-gray-400 pl-2 pr-20 mt-6 focus:outline-none focus:border-orange-400"
                type="text"
                placeholder="Search for area, street name..."
              />
            </div>
          </div>
          <div>
            <button className="mx-10 hover:scale-105 duration-200 border shadow-md w-[40%] text-white bg-orange-400 p-2" onClick={getUserLocation}>Get my current Location </button>
          </div>
        </div>
    </>
  );
};

export default LSidebar;