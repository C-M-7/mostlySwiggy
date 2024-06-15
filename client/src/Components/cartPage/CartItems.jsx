import React from "react";
import { useDispatch } from "react-redux";
import { setCartSlice, removeCartSlice } from "../../Redux/slices/CartSlice";
import { Link } from "react-router-dom";
import ratingStar from "../../Utils/ratingStar.svg";
import ruppeSign from "../../Utils/ruppeeSign.svg";
import vegSVG from "../../Utils/veg_svg.png";
import nonvegSVG from "../../Utils/Non_veg_svg.png";

function CartItems({ data, quantity }) {
  const dispatch = useDispatch();

  return (
    <div >
      <div className="border-2 p-2 m-6 rounded-md shadow-md">
        <div className="flex justify-between space-x-3">
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
              className="hover:text-orange-400"
            >
              {data.resName}
            </Link>
            {data.dishPrice ? (
              <span className="flex justify-start items-center">
                <img className="h-3.5 w-3.5" src={ruppeSign} />
                {data.dishPrice / 100}
              </span>
            ) : (
              <span className="flex justify-start items-center">
                <img className="h-3.5 w-3.5" src={ruppeSign} />
                --
              </span>
            )}
          </div>
          <img
            alt="dishImage"
            className="w-28 h-28 rounded-sm"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.dishImage}`}
          />
        </div>
        <div className="flex justify-between items-center mt-4">
          <button
            className="border border-black p-2 rounded-sm"
            onClick={() => dispatch(setCartSlice(data))}
          >
            Add
          </button>
          <div>{quantity}</div>
          <button
            className="border border-black p-2 rounded-sm"
            onClick={() => dispatch(removeCartSlice(data))}
          >
            Remove
          </button>
        </div>
      </div>
      {/* <div className="border-4 w-[70%] h-[70%]">

      </div> */}
    </div>
  );
}

export default CartItems;
