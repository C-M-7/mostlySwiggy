import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CarouselCard2 from '../cards/CarouselCard2';
import Navbar from '../mainPage/Navbar';

function FoodItem() {
  const [resData, setresData] = useState(null);
  const {cuisineName} = useParams();
  console.log(cuisineName);
  const cuisineRestaurants = useSelector((state) => state.RestaurantsData);
  console.log(cuisineRestaurants);

  useEffect(()=>{
    setresData(cuisineRestaurants)
  }, [cuisineRestaurants])

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

  const handleRemoveFilter = () =>{ const removeFilter = setresData(cuisineRestaurants);}

  return (
    <>  

        <div>
          <Navbar className=''/>
          <h1 className='pt-28 text-5xl ml-28 font-bold'>{cuisineName}</h1>
          <h1 className='ml-28 mt-2 text-gray-500'>Enjoy the restaurants with best {cuisineName} cuisines</h1>
          <div className='flex space-x-5 pt-6 ml-28'>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95'>Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95' >Filter</button>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95' onClick={handleFastDeliveries}>Fast Delivery</button>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95' onClick={handlePureVeg}>Pure Veg</button>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95' onClick={handleRatings}>Ratings 4+</button>
              <button className='border border-black rounded-3xl py-2 px-4 hover:scale-95' onClick={handleRemoveFilter}>Remove Filter</button>
          </div>
          <div className='flex flex-wrap justify-center gap-20 pt-10'>
            {
              resData &&
              resData.map((res) =>(
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