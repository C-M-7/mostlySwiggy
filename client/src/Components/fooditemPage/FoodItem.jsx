import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import CarouselCard2 from '../cards/CarouselCard2';
import Navbar from '../mainPage/Navbar';

function FoodItem() {
  const [resData, setresData] = useState(null);
  const {cuisineName} = useParams();
  const cuisineRestaurants = useSelector((state) => state.RestaurantsData);

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

  const handleRemoveFilter = () =>{ setresData(cuisineRestaurants);}

  return (
    <>  

        <div>
          <Navbar className=''/>
          <h1 className='pt-28 text-5xl ml-28 font-bold'>Let's have some <span className='text-orange-400'>{cuisineName}!</span></h1>
          <h1 className='ml-28 mt-2 text-gray-500'>Browse from the restaurants with best {cuisineName}</h1>
          <div className='flex space-x-5 pt-6 ml-28'>
              {/* <button className='border-2 transition hover:bg-orange-400 hover:text-white rounded-xl py-2 px-4 font-bold'>Filter</button> */}
              {/* <button className='border-2 transition hover:bg-orange-400 hover:text-white rounded-xl py-2 px-4 font-bold' >Filter</button> */}
              <button className='border-2  hover:bg-orange-400 hover:text-white rounded-xl py-3 px-4 font-bold transition duration-250 transform hover:scale-100 active:scale-90' onClick={handleFastDeliveries}>Fast Delivery</button>
              <button className='border-2 transition hover:bg-orange-400 hover:text-white rounded-xl py-3 px-4 font-bold duration-250 transform hover:scale-100 active:scale-90' onClick={handlePureVeg}>Pure Veg</button>
              <button className='border-2 transition hover:bg-orange-400 hover:text-white rounded-xl py-3 px-4 font-bold duration-250 transform hover:scale-100 active:scale-90' onClick={handleRatings}>Ratings 4+</button>
              <button className='border-2  hover:bg-orange-400 hover:text-white rounded-xl py-3 px-4 font-bold transition duration-250 transform hover:scale-100 active:scale-90' onClick={handleRemoveFilter}>Remove Filter</button>
          </div>
          <div className='flex flex-wrap justify-center gap-20 pt-10 mb-10'>
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