import React from 'react';
import {useDispatch} from 'react-redux';
import { setCartSlice } from '../../Redux/slices/CartSlice';
import {toast} from 'sonner';

// Add the inStock effect also
function AccordionItem({dishData, resturantId, restaurantData}) {
  const dispatch = useDispatch();
  const cart = {
    dishName : dishData.name, 
    dishPrice : dishData.finalPrice,
    dishVeg : dishData.isVeg,
    dishImage : dishData.imageId,
    resId : resturantId,
    resName : restaurantData.name
  }

  const sendToCart = () =>{
    dispatch(setCartSlice(cart));
    toast("Item added to cart!");
  }
  
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
                  <button className='z-10' type='button' onClick={sendToCart}>ADD</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default AccordionItem