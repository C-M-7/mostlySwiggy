import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { setCartSlice, removeCartSlice } from "../../Redux/slices/CartSlice";
import { toast } from "sonner";
import ratingStar from '../../Utils/ratingStar.svg'
import ruppeSign from '../../Utils/ruppeeSign.svg'

// Add the inStock effect also
function AccordionItem({ dishData, resturantId, restaurantData }) {
  const [cartItems, setCartItems] = useState(new Map());
  const cartyy = useSelector((state) => state.CartSlice);

  useEffect(()=>{
    const mapItems = new Map();
    cartyy.map((item)=> mapItems.set(item.data.dishName, item.quantity));
    setCartItems(mapItems);
  },[cartyy])

  const dispatch = useDispatch();

  const cart = {
    dishName: dishData.name,
    dishPrice: dishData.finalPrice,
    dishVeg: dishData.isVeg,
    dishImage: dishData.imageId,
    resId: resturantId,
    resName: restaurantData.name,
  };

  const removeFromCart = () =>{
    dispatch(removeCartSlice(cart));
  }

  const sendToCart = () => {
    dispatch(setCartSlice(cart));
    toast.success("Item added to cart!", {
      style: { background: "lightgreen", fontSize: "17px" },
    });
  };

  return (
    <>
      <div className="flex justify-between my-3 rounded-md border-2 shadow-lg  hover:bg-orange-400 hover:text-white transition duration-150">
        <div className="flex flex-col p-2 space-y-2">
          <div className="font-bold text-xl">{dishData.name}</div>
          <div>{dishData.finalPrice ? <span className="flex justify-start items-center"><img className='h-3.5 w-3.5' src={ruppeSign}/>{dishData.finalPrice/100}</span> : <span className="flex justify-start items-center"><img className='h-3.5 w-3.5' src={ruppeSign}/>--</span> }</div>
          <div>{dishData.ratings.aggregatedRating.rating ? <span className="flex justify-start items-center"><img className='h-3.5 w-3.5 mr-1' src={ratingStar}/>{dishData.ratings.aggregatedRating.rating}</span> : <span className="flex justify-start items-center"><img className='h-3.5 w-3.5 mr-1' src={ratingStar}/>--</span> }</div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <img
              alt="dishImage"
              className="w-20 h-20"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dishData.imageId}`}
            />
          </div>
          {cartItems.size !== 0 && cartItems.get(dishData.name) !== undefined ? (
            <div className="flex justify-between space-x-5">
              <button onClick={sendToCart}>+</button>
              <div>{cartItems.get(dishData.name)}</div>
              <button onClick={removeFromCart}>-</button>
            </div>
          ) : (
            <div>
              <button type="button" onClick={sendToCart}>
                ADD
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
