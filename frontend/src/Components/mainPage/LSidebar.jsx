import React from "react";

const LSidebar = ({ isOpen, isClose }) => {
  // const getLocationData = async(longitude, latitude) =>{
  //   try{
  //     const response = await axios.get(`https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`)
  //     console.log(response.data.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
  //     isClose();
  //   }
  //   catch(err){
  //     console.error(err.message);
  //   }
  // }

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
            <button className="mx-10 hover:scale-105 duration-200 border shadow-md w-[40%] text-white bg-orange-400 p-2">Get my current Location </button>
          </div>
        </div>
    </>
  );
};

export default LSidebar;