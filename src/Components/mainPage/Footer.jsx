import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    const handleClick =()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


  return (
    <>
        <div className='bg-black text-white px-[15%] flex justify-around pt-12 pb-28'>
            <div>
                <div className='text-xl font-bold cursor-pointer hover:text-orange-400 transition' onClick={handleClick}>mostlySwiggy</div>
            </div>
            <div>
                <div className='text-xl font-bold'>Tech Stack</div>
                <div className='text-gray-400 space-y-4 pt-4'>
                    <div>JavaScript</div>
                    <div>ReactJs</div>
                    <div>Tailwind CSS</div>
                </div>
            </div>
            <div>
                <div className='text-xl font-bold'>Contact Me</div>
                <div className='text-gray-400 space-y-4 pt-4 cursor-pointer'>
                    <Link to='/help' className='hover:text-gray-300 transition'>Contact Page</Link>
                    <div><a href='https://github.com/C-M-7' target="_blank" className='hover:text-gray-300 transition'>Github</a></div>
                    <div><a href='https://www.linkedin.com/in/cm0073/' target="_blank" className='hover:text-gray-300 transition'>LinkedIn</a></div>
                </div>
                
            </div>
            <div>
                <div className='text-xl font-bold'>Upcoming Features</div>
                <div className='text-gray-400 space-y-4 pt-4'>
                    <div>F-1</div>
                    <div>F-1</div>
                    <div>F-1</div>
                    <div>F-1</div>
                    <div>F-1</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer