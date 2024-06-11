import React from 'react'
import emptyCart from '../../Utils/emptyCart.jpg'

function EmptyCart() {
  return (
    <div className='w-screen h-screen'>
        <img alt='emptyCart.img' className='ml-[25%] w-[50%] h-screen' src={emptyCart}/>
    </div>
  )
}

export default EmptyCart