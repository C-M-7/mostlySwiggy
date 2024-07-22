import React from 'react'
import { Link } from 'react-router-dom'
import cuisinesImg from '../../Utils/cuisines.png'

function CarouselCard({cuisineName}) {
  return (
    <>
        <div className='w-[100%]'>
        <Link to={`/fooditem/${cuisineName}`} className='hover:bg-gray-200  transition p-6 rounded-lg w-48 h-44 shadow-lg border-2 mx-3 flex flex-col items-center space-y-6'>
            <img src={cuisinesImg} className='h-20 w-20' alt='cuisine_img'/>
            <span className='font-bold text-xl w-max'>{cuisineName}</span>
        </Link>
        </div>
    </>
  )
}

export default CarouselCard