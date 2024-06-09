import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';
import EmptyCart from '../loader/EmptyCart';

function Cart() {
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const cartData = useSelector((state) => state.CartSlice);

  useEffect(()=>{
    if(cartData){
      let totalprice = 0;
      let totalquantity = 0;
      cartData.forEach((item) => {
        if (item.data.dishPrice !== undefined) {
            totalprice += item.data.dishPrice * item.quantity;
        }
        totalquantity += item.quantity;
      });
      setQuantity(totalquantity);
      setPrice(totalprice);
    }
  }, [cartData])

  return (
    <>
      <div className='flex flex-col items-center' >
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
          <div>
            <EmptyCart/>
          </div>
        }
      </div>
    </>
  )
}

export default Cart