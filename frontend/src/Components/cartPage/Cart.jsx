import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

function Cart() {
  const cartData = useSelector((state) => state.CartSlice);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  return (
    <>
      <div className='flex flex-col items-center' >
        <div className='text-3xl font-bold p-10'>Your cart</div>
          <div>
          {
            cartData &&
            cartData.map((item, index)=>{
              const totalprice = item.data.dishPrice;
              setTotalPrice(totalPrice+totalprice);
              const totalquantity = item.quantity;
              setTotalQuantity(totalQuantity+totalquantity);
              return(
                <CartItems key={index} data={item.data} quantity={item.quantity}/>
              );
            })
          }
        </div>
        {
          totalQuantity!== 0 ?
        <div className='bg-black text-white p-4'>
          <div className='flex justify-between space-x-60'>
            <div>Total Price</div>
            <div>{totalPrice}</div>
          </div>
          <div className='flex justify-between'>
            <div>Quantity</div>
            <div>{totalQuantity}</div>
          </div>
        </div>
        :
        <div>Your cart is empty</div>
        } 
      </div>
    </>
  )
}

export default Cart