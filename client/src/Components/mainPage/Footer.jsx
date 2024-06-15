import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
        <div className='bg-black text-white px-[15%] flex justify-around pt-12 pb-28'>
            <div>
                <div className='text-xl font-bold cursor-pointer'>mostlySwiggy</div>

            </div>
            <div>
                <div className='text-xl font-bold cursor-pointer'>Company</div>
                <div className='text-gray-400 space-y-4 pt-4 cursor-pointer'>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                    <div>mostlySwiggy One</div>
                    <div>mostlySwiggy Instamart</div>
                    <div>mostlySwiggy Genie</div>
                </div>
            </div>
            <div>
                <div className='text-xl font-bold cursor-pointer'>Contact Us</div>
                <div className='text-gray-400 space-y-4 pt-4 cursor-pointer'>
                    <Link to='/help'>Help & Support</Link>
                    <div>About</div>
                    <div>About</div>
                </div>
                <div className='text-xl font-bold pt-10 cursor-pointer'>Legal</div>
                <div className='text-gray-400 space-y-4 pt-4 cursor-pointer'>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                </div>
                
            </div>
            <div>
                <div className='text-xl font-bold cursor-pointer'>We Deliever to:</div>
                <div className='text-gray-400 space-y-4 pt-4 cursor-pointer'>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                    <div>About</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer