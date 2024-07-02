import React from "react";
import { useDispatch } from "react-redux";
import { setCartSlice, removeCartSlice } from "../../Redux/slices/CartSlice";
import { Link } from "react-router-dom";
import ratingStar from "../../Utils/ratingStar.svg";
import foodQuantitySvg from '../../Utils/food-quantity.svg'
import ruppeSign from "../../Utils/ruppeeSign.svg";
import vegSVG from "../../Utils/veg_svg.png";
import nonvegSVG from "../../Utils/Non_veg_svg.png";

function CartItems({ data, quantity }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="border-2 p-2 m-6 rounded-md shadow-md">
        <div className="flex justify-between space-x-40">
          <div>
            <div className="flex items-center space-x-2">
              {data.dishVeg ? (
                <img src={vegSVG} className="h-4 w-4" />
              ) : (
                <img src={nonvegSVG} className="h-4 w-4" />
              )}
              <div className="font-bold text-xl rounded-lg">
                {data.dishName}
              </div>
            </div>

            <Link
              to={`/restaurant/${data.resId}`}
              className="hover:underline transition text-gray-400"
            >
              {data.resName}
            </Link>
            {data.dishPrice ? (
              <span className="flex items-center">
                <img className="h-3.5 w-3.5 mr-0.5" src={ruppeSign} />
                {data.dishPrice / 100}
              </span>
            ) : (
              <span className="flex justify-start items-center">
                <img className="h-3.5 w-3.5" src={ruppeSign} />
                --
              </span>
            )}
            <div className="flex items-center space-x-1">
              <div><img src={foodQuantitySvg} alt="food_quantity" className="h-4 w-4"/></div>
              <div>x {quantity}</div>
            </div>
            <div className="flex space-x-5 items-center mt-4 rounded-md border-2 w-max p-1">
              <button
                className="rounded-sm font-bold text-lg"
                onClick={() => dispatch(setCartSlice(data))}
              >
                +
              </button>
              <div>{quantity}</div>
              <button
                className=" rounded-sm font-bold text-lg"
                onClick={() => dispatch(removeCartSlice(data))}
              >
                -
              </button>
            </div>
          </div>
          <img
            alt="dishImage"
            className="w-40 h-40 rounded-md"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.dishImage}`}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItems;
