import React from "react";
import emptyCart from "../../Utils/emptyCart.jpg";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="relative w-screen h-screen flex flex-col items-center">
      <img
        alt="emptyCart.img"
        className="absolute w-[50%] h-screen -mt-14"
        src={emptyCart}
      />
      <Link to={'/home'} className="absolute mt-[35%] mr-[5%]  text-xl border-2 p-3 rounded-md font-bold hover:bg-orange-400 hover:text-white transition shadow-lg">
        See Restaurants Near You
      </Link>
    </div>
  );
}

export default EmptyCart;
