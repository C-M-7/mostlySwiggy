import React from 'react'
import { useDispatch } from 'react-redux'
import {setCartSlice, removeCartSlice } from '../../Redux/slices/CartSlice'
import { Link } from 'react-router-dom'

function CartItems({data, quantity}) {
  const dispatch = useDispatch();
  
  return (
    <div>
      <div className='border border-black p-2 m-6 rounded-md shadow-md'>
          <div className='flex justify-between space-x-3'>
            <div>
              <div className='font-bold'>{data.dishName}</div>
              <Link to={`/restaurant/${data.resId}`} className='hover:text-orange-400'>{data.resName}</Link>
              {
                data.dishPrice!==undefined ? 
                <div className='font-bold'>{'Rs.' + data.dishPrice/100}</div> :
                <div className='text-gray-400'>Price Unavailable</div>
              }
              <div>{data.dishVeg ? 'Veg' : 'Non-Veg'}</div>
            </div>
            <img alt='dishImage' className='w-28 h-28 rounded-sm' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.dishImage}`}/>
          </div>
          <div className='flex justify-between items-center mt-4'>
          <button className='border border-black p-2 rounded-sm' onClick={() => dispatch(setCartSlice(data))}>Add</button>
          <div>{quantity}</div>
          <button className='border border-black p-2 rounded-sm' onClick={()=>dispatch(removeCartSlice(data))}>Remove</button>
          </div>
      </div>
    </div>
  )
}

export default CartItems