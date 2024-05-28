import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems';

function Cart() {
  const cartData = useSelector((state) => state.CartSlice);
  console.log(cartData);
  // let totalP = 0, totalQ = 0;
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [totalQuantity, setTotalQuantity] = useState(0);

  // useEffect(()=>{
    // cartData.map(item =>  (totalQ += item.quantity, totalP = item.data.dishPrice * item.quantity))
    // setTotalPrice(totalP);
    // setTotalQuantity(totalQ);



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
        {/* {
        //   totalQuantity!== 0 ?
        // <div className='bg-black text-white p-4'>
        //   <div className='flex justify-between space-x-60'>
        //     <div>Total Price</div>
        //     <div>{totalPrice ? totalPrice : '___'}</div>
        //   </div>
        //   <div className='flex justify-between'>
        //     <div>Quantity</div>
        //     <div>{totalQuantity}</div>
        //   </div>
        // </div>
        // :
        <div>Your cart is empty</div>
        }  */}
      </div>
    </>
  )
}

export default Cart