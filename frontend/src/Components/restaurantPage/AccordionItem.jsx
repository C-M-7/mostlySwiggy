import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { setCartSlice, removeCartSlice } from "../../Redux/slices/CartSlice";
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

  const removeFromCart = () =>{
    const newCartItems = new Map(cartItems);
    if (newCartItems.get(dishData.name) <= 1) {
      newCartItems.delete(dishData.name)
    } else {
      newCartItems.set(dishData.name, newCartItems.get(dishData.name) - 1);
    }
    setCartItems(newCartItems);
    dispatch(removeCartSlice(cart));
  }

  const sendToCart = () => {
    const newCartItems = new Map(cartItems);
    if (!newCartItems.has(dishData.name)) {
      newCartItems.set(dishData.name, 1);
    } else {
      newCartItems.set(dishData.name, newCartItems.get(dishData.name) + 1);
    }
    setCartItems(newCartItems);
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
              <button onClick={sendToCart}>+</button>
              <div>{cartItems.get(dishData.name)}</div>
              <button onClick={removeFromCart}>-</button>
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
