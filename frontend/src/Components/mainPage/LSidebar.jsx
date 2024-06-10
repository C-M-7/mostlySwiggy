import React, { useState } from "react";
import FetchLocation from "../../Config/FetchLocation";
import { useDispatch } from "react-redux";
import { setuserlocation } from "../../Redux/slices/UserLocation";
import FetchData from "../../Config/FetchData";
import { setRestaurantData } from "../../Redux/slices/RestaurantsData";
import { setRestaurantCuisines } from "../../Redux/slices/RestaurantsCuisines";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";

const LSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const getUserData = async (location) => {
    const response = await FetchData(location);
    toast.info("Your Location is in use!", {
      style: { background: "yellow", fontSize: "17px" },
    });

    const cuisineSet = new Set();
    response.map((res) => res.cuisines.map((cus) => cuisineSet.add(cus)));
    const cuisineArr = [...cuisineSet];

    dispatch(setRestaurantCuisines(cuisineArr));
    dispatch(setRestaurantData(response));
    if (response) {
      setLoader(false);
      navigate("/");
    }
  };

  const getUserLocation = async () => {
    try {
      setLoader(true);
      const location = await FetchLocation();
      dispatch(setuserlocation(location));
      getUserData(location);
    } catch (err) {
      toast.error("Unable to fetch your location!", {
        style: { background: "red", fontSize: "17px" },
      });
      console.error(err.message);
    }
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="flex flex-col items-center justify-center mt-[15%]">
          <div className="p-10 text-2xl font-bold">
            Click the button to explore the restaurants near you
          </div>
          <div>
            <button
              className="border-2 shadow-md p-4 rounded-md hover:bg-orange-400 hover:text-white font-bold transition duration-250 transform hover:scale-100 active:scale-90"
              onClick={getUserLocation}
            >
              Get My Location
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LSidebar;
