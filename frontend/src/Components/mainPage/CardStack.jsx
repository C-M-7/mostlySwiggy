import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CarouselCard2 from '../cards/CarouselCard2';

function CardStack() {
  const [resData, setresData] = useState(null);
  const restaurantData = useSelector(state => state.RestaurantsData);
  
  useEffect(()=>{
    setresData(restaurantData)
  }, [restaurantData])

  const handleFastDeliveries = ()=>{
    const fastestDelivery = resData.filter((res) => res.deliveryTime < 30);
    setresData(fastestDelivery);
  }

  const handlePureVeg = () =>{
    const pureVeg = resData.filter((res) => res.veg === true); 
    setresData(pureVeg);
  }

  const handleRatings = () =>{
    const ratings = resData.filter((res) => res.avgRatingString > "4.0");
    setresData(ratings);
  }

  return (
    <>
        <div className='p-10'>
            <div className='text-xl font-bold'>Restaurants with online food delivery in YOUR_LOCATION</div>
            <div className='p-4'></div>
            <div className='flex space-x-12 pb-6'>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4' >Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4' onClick={handleFastDeliveries}>Fast Delivery</button>
              <button className='border border-black rounded-3xl py-2 px-4' onClick={handlePureVeg}>Pure Veg</button>
              <button className='border border-black rounded-3xl py-2 px-4' onClick={handleRatings}>Ratings 4+</button>
              <button className='border border-black rounded-3xl py-2 px-4'>Filter</button>
            </div>
            <div className='flex flex-wrap justify-center gap-20'>
            {
              resData &&
              resData.map((res)=>(
                <CarouselCard2 key={res.id} resId = {res.id} resName={res.name} resRating={res.avgRatingString} resCostfor2 = {res.costForTwo} resImage = {res.cloudinaryImageId}/> 
              ))
            }
            </div>
        </div>
    </>
  )
}

export default CardStack