import React from 'react'
import { useSelector } from 'react-redux'
import CarouselCard2 from '../cards/CarouselCard2';

function CardStack() {
  const restaurantData = useSelector(state => state.RestaurantsData);

  return (
    <>
        <div className='p-10'>
            <div className='text-xl font-bold'>Restaurants with online food delivery in YOUR_LOCATION</div>
            <div className='p-4'></div>
            <div className='flex space-x-12 pb-6'>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
            </div>
            <div className='flex flex-wrap justify-center gap-20'>
            {
              restaurantData &&
              restaurantData.map((res)=>(
                <CarouselCard2 key={res.id} resName={res.name} resRating={res.avgRatingString} resCostfor2 = {res.costForTwo}/> 
              ))
            }
            </div>
        </div>
    </>
  )
}

export default CardStack