import React, { useRef } from "react";
import CarouselCard from "../cards/CarouselCard";
import {useSelector} from 'react-redux';

function MainCarousel() {
  const carouselControl = useRef(null);
  const cuisineData = useSelector((state) => state.RestaurantsCuisines);
  console.log(cuisineData);
  
  const carouselRight = () => {
    if (carouselControl.current) {
      carouselControl.current.scrollLeft += 200;
    }
  };

  const carouselLeft = () => {
    if (carouselControl.current) {
      carouselControl.current.scrollLeft -= 200;
    }
  };

  return (
    <>
      <div className="flex p-10 justify-between">
        <div className="font-bold text-xl">What's on your mind?</div>
        <div className="space-x-2">
          <button onClick={carouselLeft} className="hover:text-orange-400">
            left
          </button>
          <button onClick={carouselRight} className="hover:text-orange-400">
            right
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-hidden pt-6 scroll-smooth"
        ref={carouselControl}
      >
       {cuisineData &&
        cuisineData.map((cuisine) =>( 
          <CarouselCard key={cuisine} cuisineName = {cuisine} />
        ))
       }  
      </div>
    </>
  );
}

export default MainCarousel;
