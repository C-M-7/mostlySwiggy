import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import { enableMapSet } from 'immer'; 

enableMapSet();

function Cart() {
  const cartData = useSelector((state) => state.CartSlice);

  return (
    <>
      <div className='flex flex-col items-center'>
        {
          cartData &&
          Array.from(cartData.entries()).map(([value, key])=>{
            return(
              <CartItems data={key} quantity={value}/>
            );
          })
        }
      </div>
    </>
  )
}

export default Cart