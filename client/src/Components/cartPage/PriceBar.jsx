import React from 'react';

const PriceBar = ({price, quantity}) =>{
    return (
        <div className='flex fixed bottom-0 left-0 right-0 z-10 p-5 bg-orange-400 text-white font-bold text-2xl justify-evenly'>
            <div>Price : ₹ {price}</div>
            <div>Quantity : {quantity}</div>
        </div>
    )
}

export default PriceBar;