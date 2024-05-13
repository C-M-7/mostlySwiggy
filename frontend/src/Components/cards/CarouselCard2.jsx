import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard2({resName, resRating, resCostfor2}) {
  return (
    <>
        <Link to='/restaurant' className=' h-auto'>
          <div className='w-48 h-auto py-4 border border-black rounded-md flex flex-col items-center'>
            <div>{resName}</div>
            <div>{resRating}</div>
            <div>{resCostfor2}</div>
          </div>
        </Link>
    </>
  )
}

export default CarouselCard2