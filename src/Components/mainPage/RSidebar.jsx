import React from 'react'

function RSidebar({isOpen, isClose}) {
  return (
    <>
        <div className={`h-screen w-[30%] right-0 top-0 z-40 fixed bg-white shadow-lg transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className='px-10'>
                <div className='pt-12 cursor-pointer hover:text-orange-400' onClick={isClose}>Close</div>
                <div className='pt-6'>Login<br></br><span className='text-sm'>or create an account</span></div>
                <input className='border border-gray-300 p-4 w-full mt-8' placeholder='Phone Number'/>
                <button className='border border-orange-400 p-2 mt-6 w-full bg-orange-400 text-white'>Login</button>
                <div className='text-xs'>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</div>
            </div>
        </div>
    </>
  )
}

export default RSidebar