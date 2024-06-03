import React from "react";
import { Link } from "react-router-dom";

function CarouselCard2({ resId, resName, resRating, resCostfor2, resImage }) {
  return (
    <>
      <Link to={`/restaurant/${resId}`}>
        <div className="w-52 h-72 shadow-lg border-2 rounded-md flex flex-col justify-between hover:bg-orange-400 hover:text-white transition">
          <div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resImage}`}
              className="h-44 w-52 rounded-md"
              alt="Restaurant"
            />
          </div>
          <div className="pl-2 font-bold">{resName}</div>
          <div className="flex space-x-3 justify-between p-2">
            <div>
              <div>{resRating}</div>
            </div>
            <div>
              <div>{resCostfor2}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CarouselCard2;
