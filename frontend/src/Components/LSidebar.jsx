import React from "react";

const LSidebar = () =>(
    <>
        <div className="h-screen w-[40%] top-0 left-0 fixed bg-white flex-col">
            <div className="h-[20%] m-10">
                <div>Cross</div>
                <div>
                    <input className='h-10' type="text" placeholder="vau"/>    
                </div>
            </div>
            <div className="h-[20%] m-10">
                Location Accessibility
            </div>
        </div>
    </>
)

export default LSidebar;