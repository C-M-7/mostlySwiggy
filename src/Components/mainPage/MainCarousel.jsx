import React, { useRef } from "react";
import CarouselCard from "../cards/CarouselCard";
import {useSelector} from 'react-redux';
import rightArrow from '../../Utils/arrow-button-right.svg'
import leftArrow from '../../Utils/arrow-button-left.svg'

function MainCarousel() {
  const carouselControl = useRef(null);
  const cuisineData = useSelector((state) => state.RestaurantsCuisines);
  
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
      <div className="flex p-8 justify-between">
        <div className="font-bold text-2xl">What's cooking?</div>
        <div className="space-x-2">
          <button onClick={carouselLeft} className="hover:text-orange-400">
            <img className='h-6 w-6' alt='left-btn-img' src={leftArrow}/>
          </button>
          <button onClick={carouselRight} className="hover:text-orange-400">
          <img className='h-6 w-6' alt='right-btn-img' src={rightArrow}/>
          </button>
        </div>
      </div>
      <div
        className="flex overflow-x-auto scroll-smooth scrollbar-hidden"
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
