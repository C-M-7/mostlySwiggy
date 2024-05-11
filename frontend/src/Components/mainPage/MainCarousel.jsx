import React, { useRef } from "react";
import CarouselCard from "../cards/CarouselCard";
import {useSelector} from 'react-redux';

function MainCarousel() {
  const carouselControl = useRef(null);
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

  // if(restaurantData) console.log(restaurantData)

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
         
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
        <CarouselCard cName cPic />
      </div>
    </>
  );
}

export default MainCarousel;
