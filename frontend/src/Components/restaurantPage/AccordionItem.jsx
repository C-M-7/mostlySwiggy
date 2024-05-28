import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartSlice } from "../../Redux/slices/CartSlice";
import { toast } from "sonner";

// Add the inStock effect also
function AccordionItem({ dishData, resturantId, restaurantData }) {
  const [cartItems, setCartItems] = useState(new Map());
  const dispatch = useDispatch();

  const cart = {
    dishName: dishData.name,
    dishPrice: dishData.finalPrice,
    dishVeg: dishData.isVeg,
    dishImage: dishData.imageId,
    resId: resturantId,
    resName: restaurantData.name,
  };

  const sendToCart = () => {
    if (!cartItems.get(dishData.name)) {
      setCartItems(cartItems.set(dishData.name, 1));
      console.log(cartItems);
    } else {
      setCartItems(cartItems.set(dishData.name, cartItems.get(dishData.name) + 1));
      console.log(cartItems);
    }
    dispatch(setCartSlice(cart));
    toast.success("Item added to cart!", {
      style: { background: "lightgreen", fontSize: "17px" },
    });
  };

  return (
    <>
      <div className="flex justify-between my-3 border border-black">
        <div className="flex flex-col">
          <div>{dishData.isVeg}</div>
          <div>{dishData.name}</div>
          <div>{dishData.finalPrice}</div>
          <div>{dishData.ratings.aggregatedRating.rating}</div>
          <div>{dishData.ratings.aggregatedRating.ratingCount}</div>
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
              <button>+</button>
              <div>{cartItems.get(dishData.name)}</div>
              <button>-</button>
            </div>
          ) : (
            <div>
              <button  type="button" onClick={sendToCart}>
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
