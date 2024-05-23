import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCartSlice } from '../../Redux/slices/CartSlice'

function CartItems({data, quantity}) {
  const dispatch = useDispatch()
  
  return (
    <div className='border border-black p-2'>
        <div>{data.dishName}</div>
        <div>{data.dishPrice}</div>
        <div>{data.dishVeg}</div>
        <div>{data.resId}</div>
        <div>{data.resName}</div>
        <div>{quantity}</div>
        <button className='border border-black' onClick={()=>dispatch(removeCartSlice(data))}>Remove</button>
    </div>
  )
}

export default CartItems