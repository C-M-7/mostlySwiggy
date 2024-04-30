import React from "react";

const LSidebar = () =>(
    <>
        <div className="h-screen w-[40%] top-0 left-0 fixed bg-white flex-col">
            <div className="h-[20%] m-10">
                <div>Cross</div>
                <div>
                    <input className='h-10 w-[100%] border border-gray-400 pl-2 pr-20 mt-6 focus:outline-none focus:border-orange-400' type="text" placeholder="Search for area, street name..."/>    
                </div>
            </div>
            <div className="h-[20%] m-10">
                Location Accessibility
            </div>
        </div>
    </>
)

export default LSidebar;