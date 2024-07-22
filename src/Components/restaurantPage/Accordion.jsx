import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

function Accordion({data, wantVeg, resturantId, restaurantData}) {
  const [isOpen, setIsOpen] = useState(false);
  
    return (
    <>
        <div className='flex flex-col'>
            <div className='flex border-2 p-2 rounded-md justify-between cursor-pointer hover:bg-orange-400 hover:text-white transition duration-150' onClick={() => setIsOpen(!isOpen)}>
                <div className='text-xl font-bold p-1'>{data.title}</div>   
            </div>
            <div className={`accordion-content ${isOpen ? 'open' : ''} transition duration-100`}>
                {
                  data.itemCards.map((item, index)=>{
                    if(wantVeg == 2){
                      const dish = item.card?.info;
                      return(
                        <AccordionItem
                          key={dish.id} 
                          index={index}
                          dishData={dish}
                          resturantId = {resturantId}
                          restaurantData= {restaurantData}
                        />
                      );
                    }
                    else if(wantVeg === 1){
                      const dish = wantVeg === item.card?.info.isVeg ? item.card?.info : null;
                      if(!dish) return null;
                      return(
                        <AccordionItem
                          key={dish.id} 
                          index={index}
                          dishData={dish}
                          resturantId = {resturantId}
                          restaurantData= {restaurantData}
                        />
                      );
                    }
                    else{
                      const dish = item.card?.info.isVeg === undefined ? item.card?.info : null;
                      if(!dish) return null;
                      return(
                        <AccordionItem
                          key={dish.id} 
                          index={index}
                          dishData={dish}
                          resturantId = {resturantId}
                          restaurantData= {restaurantData}
                        />
                      );
                    }
                  })
                }
            </div>
            <hr className='border-4 rounded-md shadow-lg mb-4'/>
        </div>
    </>
  )
}

export default Accordion