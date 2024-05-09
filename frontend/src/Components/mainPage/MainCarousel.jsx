import React, {  useRef } from "react";
import CarouselCard from "../cards/CarouselCard";
// import {useSelector} from 'react-redux';
// import axios from 'axios';

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

// /  const userLocation = useSelector(state => state.userlocation);

  // useEffect(()=>{
  //   const getLocationData = async() =>{
  //     try{
  //       const response = await axios.get(`https://www.swiggy.com/mapi/homepage/getCards?lat=${userLocation.lat}&lng=${userLocation.long}`)
  //       if(response) console.log(response.data.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
  //     }
  //     catch(err){
  //       console.error(err.message);
  //     }
  //   }
  //   getLocationData();
  // })

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
