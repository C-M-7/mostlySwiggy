import React from 'react'
import { Link } from 'react-router-dom'

function CarouselCard2() {
  return (
    <>
        <Link to='/restaurant' className='px-6'>
            <div>Carousel2Img</div>
            <div>RestaurantName</div>
            <div></div>
        </Link>
    </>
  )
}

export default CarouselCard2