import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard2({resId,  resName, resRating, resCostfor2, resImage}) {
  return (
    <>
        <Link to={`/restaurant/${resId}`} className=' h-auto hover:scale-95'>
          <div className='w-48 h-auto shadow-md rounded-md flex flex-col items-center'>
            
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resImage}`}
            className='w-[100%] h-[40%] rounded-md'
            alt='Restaurant'
            />
            <div className='px-4'>
            <div>{resName}</div>
            <div>{resRating}</div>
            <div>{resCostfor2}</div>
            </div>
          </div>
        </Link>
    </>
  )
}

export default CarouselCard2