import React from "react";
import { Link } from "react-router-dom";
import ratingSvg from '../../Utils/ratingStar.svg';

function CarouselCard2({ resId, resName, resRating, resCostfor2, resImage }) {
  return (
    <>
      <Link to={`/restaurant/${resId}`}>
        <div className="w-52 h-72 shadow-lg border-2 rounded-md flex flex-col justify-between hover:bg-gray-200 transition">
          <div>
            <img
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resImage}`}
              className="h-44 w-52 rounded-md"
              alt="Restaurant"
            />
          </div>
          <div className="pl-2 font-bold">{resName}</div>
          <div className="flex space-x-3 justify-between p-2">
            <div className="flex items-center space-x-1">
              <div><img src={ratingSvg} className="w-4 h-4" alt="rating"/></div>
              <div>{resRating}</div>
            </div>
            <div>
              <div className="text-gray-400">{resCostfor2}</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default CarouselCard2;
