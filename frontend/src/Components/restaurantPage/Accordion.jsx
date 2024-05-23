import React, { useState } from 'react'
import AccordionItem from './AccordionItem';

function Accordion({data, resturantId, restaurantData}) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(data.title);
  
    return (
    <>
        <div className='flex flex-col'>
            <div className='flex border-2 p-2 rounded-sm justify-between'>
                <div>{data.title}</div>   
                <button onClick={() => setIsOpen(!isOpen)}>open</button>
            </div>
            <div className={`${ isOpen===false ? 'hidden'  : 'block'} p-2`}>
                {
                  data.itemCards.map((item, index)=>{
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
                  })
                }
            </div>
            <hr className='border-4 mb-4'/>
        </div>
    </>
  )
}

export default Accordion