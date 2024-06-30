import React from 'react'
import noRestaurant from '../../Utils/noRestaurants.jpg'

const NoRestaurants = () => {
  return (
    <div className='w-screen h-screen'>
        <img alt='No Restaurant Ahead' className='ml-[25%] w-[50%] h-screen' src={noRestaurant}/>
    </div>
  )
}

export default NoRestaurants