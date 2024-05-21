import React from 'react'

// Add the inStock effect also
function AccordionItem({dishData}) {
  return (
    <>
        <div className='flex justify-between my-3 border border-black'>
            <div className='flex flex-col'>
                <div>{dishData.isVeg}</div>
                <div>{dishData.name}</div>
                <div>{dishData.finalPrice}</div>
                <div>{dishData.ratings.aggregatedRating.rating}</div>
                <div>{dishData.ratings.aggregatedRating.ratingCount}</div>
            </div>
            <div className='flex flex-col items-center'>
                <div>
                  <img alt='dishImage' className='w-20 h-20' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dishData.imageId}`}/>
                </div>
                <div>
                  <button className='z-10'>ADD</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccordionItem