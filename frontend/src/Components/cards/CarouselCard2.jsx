import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard2({resName, resRating}) {
  return (
    <>
        <Link to='/restaurant' className='px-6'>
            <div>{resName}</div>
            <div>{resRating}</div>
        </Link>
    </>
  )
}

export default CarouselCard2