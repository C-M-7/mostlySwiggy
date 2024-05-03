import React, { useRef } from 'react'
import CarouselCard2 from './CarouselCard2'

function Main2Carousel() {
    const Carousel2Control = useRef(null);

    const scrollLeft = () =>{
        if(Carousel2Control.current) Carousel2Control.current.scrollLeft -= 200;
    }

    const scrollRight = () =>{
        if(Carousel2Control.current) Carousel2Control.current.scrollLeft += 200;
    }

    return (
    <>
        <div className='p-10 flex justify-between'>
            <div className='font-bold text-xl'>Top restaurant chains in YOUR_LOCATION</div>
            <div className='space-x-2'>
                <button onClick={scrollLeft} className='hover:text-orange-400'>left</button>
                <button onClick={scrollRight} className='hover:text-orange-400'>right</button>
            </div>
        </div>
        <div className='flex overflow-x-hidden scroll-smooth' ref={Carousel2Control}>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
            <CarouselCard2/>
        </div>
    </>
  )
}

export default Main2Carousel