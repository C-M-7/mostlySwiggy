import React, { useState } from "react";
import Navbar from "../mainPage/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Search() {
  const [routes, setRoutes] = useState("res");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const resData = useSelector((state) => state.RestaurantsData);
  const cusData = useSelector((state) => state.RestaurantsCuisines);

  const cusRoutes = () => {
    setSearchTerm("");
    setSearchResults("");
    setRoutes("cus");
  }
  const resRoutes = () => {
    setSearchTerm("");
    setSearchResults("");
    setRoutes("res");
  }

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() === "") setSearchResults([]);
    else {
      setTimeout(() => {
        const res = resData
          .filter((r) => r.name.toLowerCase().startsWith(term.toLowerCase()))
          .map((r) => [r.name, r.id, r.avgRatingString, r.cloudinaryImageId]);
        const cui = cusData.filter((c) =>
          c.toLowerCase().startsWith(term.toLowerCase())
        );
        let result;
        if (routes === "res") result = res;
        else result = cui;
        console.log(result);
        setSearchResults(result);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center h-screen">
        <div className="w-[50%] mt-36">
          <input
            className="border border-black pl-2 w-[100%] h-12 rounded-sm"
            type="text"
            placeholder={routes === 'res' ? 'Search for restaurants...' : 'Search for cuisines...'}
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
        <div className="mt-6">
          <button className={`m-4 border p-3 rounded-md ${routes === 'res' ? 'bg-orange-400 transition text-white font-bold border-2 border-orange-400 shadow-md' : ''}`} onClick={resRoutes}>
            Restaurants
          </button>
          <button className={`m-4 border p-3 rounded-md ${routes === 'cus' ? 'bg-orange-400 transition text-white font-bold border-2 border-orange-400 shadow-md' : ''}`} onClick={cusRoutes}>
            Cuisines
          </button>
        </div>
        <div className="w-[50%] h-auto mt-6  flex flex-col overflow-y-auto scroll-smooth scrollbar-hidden">
          <ul>
            {routes === "res"
              ? searchResults &&
                searchResults.map((item) => (
                  <Link to={`/restaurant/${item[1]}`}>
                    <li
                      className="border-2 flex justify-between rounded-md m-2 hover:bg-orange-400 hover:text-white transition shadow-md p-2"
                      key={item[1]}
                    >
                      <div className="flex flex-col">
                        <div className="text-2xl font-bold">{item[0]}</div>
                        <div className="text-gray-400">{item[2]}</div>
                      </div>
                      <div>
                        <img alt='resImage' className="w-20 h-20" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item[3]}`}/>
                      </div>
                    </li>
                  </Link>
                ))
              : searchResults &&
                searchResults.map((item, index) => (
                  <Link to={`/fooditem/${item}`}>
                    <li
                      className="border-2 m-2 rounded-md hover:bg-orange-400 hover:text-white transition shadow-md p-2"
                      key={index}
                    >
                      {item}
                    </li>
                  </Link>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
