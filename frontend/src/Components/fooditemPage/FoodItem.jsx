import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CarouselCard2 from '../cards/CarouselCard2';
import Navbar from '../mainPage/Navbar';

function FoodItem() {
  const {cuisineName} = useParams();
  console.log(cuisineName);
  const cuisineRestaurants = useSelector((state) => state.RestaurantsData);
  console.log(cuisineRestaurants);

  return (
    <>  
        <Navbar/>
        <div className='p-10'>
            <div className='mt-20 flex flex-wrap justify-center gap-20'>
              {
                cuisineRestaurants &&
                cuisineRestaurants.map((res) =>(
                  res.cuisines.includes(cuisineName) ? (
                    <CarouselCard2 key={res.id} resId = {res.id} resName={res.name} resRating={res.avgRatingString} resCostfor2 = {res.costForTwo} resImage = {res.cloudinaryImageId}/>
                  ) : null
                ))
              }
            </div>
        </div>
    </>
  )
}

export default FoodItem