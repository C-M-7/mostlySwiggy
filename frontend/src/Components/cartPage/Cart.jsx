import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

function Cart() {
  const cartData = useSelector((state) => state.CartSlice);

  return (
    <>
      <div className='flex flex-col items-center'>
        {
          cartData &&
          cartData.map((item, index)=>{
            return(
              <CartItems key={index} data={item.data} quantity={item.quantity}/>
            );
          })
        }
      </div>
    </>
  )
}

export default Cart