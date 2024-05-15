import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard({cuisineName}) {
  console.log(cuisineName);
  return (
    <>
        <Link to={`/fooditem/${cuisineName}`} className='p-4  border border-black rounded-lg mx-2'>
            <div>{cuisineName}</div>
        </Link>
    </>
  )
}

export default CarouselCard