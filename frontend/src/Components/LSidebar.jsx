import React from "react";

const LSidebar = ({ isOpen, isClose }) => {
  return (
    <>
        <div className={`h-screen w-[40%] z-20 shadow-lg top-0 left-0 fixed bg-white flex-col transition-transform duration-300  ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="h-[20%] m-10">
            <div onClick={isClose} className="cursor-pointer hover:text-orange-400">Close</div>
            <div>
              <input
                className="h-10 w-[100%] border border-gray-400 pl-2 pr-20 mt-6 focus:outline-none focus:border-orange-400"
                type="text"
                placeholder="Search for area, street name..."
              />
            </div>
          </div>
          <div className="h-[20%] m-10 border border-gray-400 pl-2 pt-2">
            Location Accessibility
          </div>
        </div>
    </>
  );
};

export default LSidebar;
