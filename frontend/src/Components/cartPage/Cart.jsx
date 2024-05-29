import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

function Cart() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const cartData = useSelector((state) => state.CartSlice);
  console.log(cartData);

  useEffect(()=>{
    let totalprice = 0, totalquantity = 0;
    cartData.map((item) => (item.data.dishPrice !== undefined ? totalprice = item.data.dishPrice*item.quantity : totalprice += 0, totalquantity += item.quantity));
    setQuantity(totalquantity);
    setPrice(totalprice);
  }, [cartData])

  return (
    <>
      <div className='flex flex-col items-center' >
        <div className='text-3xl font-bold p-10'>Your cart</div>
          <div>
          {
            cartData &&
            cartData.map((item, index)=>{
              return(
                <CartItems key={index} data={item.data} quantity={item.quantity}/>
              );
            })
          }
        </div>
        {
          quantity !== 0
          ?
          <div className='flex flex-col items-center'>
            <div className='flex justify-between space-x-40'>
              <div>Price</div>
              <div>{price/100}</div>
            </div>
            <div className='flex justify-between space-x-40'>
              <div>Quantity</div>
              <div>{quantity}</div>
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