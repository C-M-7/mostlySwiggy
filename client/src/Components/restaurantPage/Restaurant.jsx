import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../mainPage/Navbar";
import Accordion from "./Accordion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ratingStar from "../../Utils/ratingStar.svg";
import vegSVG from "../../Utils/veg_svg.png";
import nonvegSVG from "../../Utils/Non_veg_svg.png";

function Restaurant() {
  const { id } = useParams();
  const [headerData, setheaderData] = useState("");
  const [menuData, setMenuData] = useState([]);
  const [footerData, setfooterData] = useState("");
  const [isVeg, setVeg] = useState(2);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    try {
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;
      const response = await fetch(main_url);
      const json = await response.json();
      if (json) setLoader(false);
      const data = json?.data?.cards;
      const headerFinder = data.find(
        (card) =>
          card.card &&
          card.card.card &&
          card.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      const header = headerFinder?.card?.card?.info;
      const menuFinder = data.find((card) => "groupedCard" in card);
      const menu = menuFinder.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const { imageId, text } = menu[menu.length - 2]?.card?.card || {};
      const { name, area, completeAddress } =
      menu[menu.length - 1]?.card?.card || {};
      const footer = { imageId, text, name, area, completeAddress };
      
      setheaderData(header || {});
      setMenuData(menu || {});
      setfooterData(footer || {});
    } catch (error) {
      console.log("Error occured in fetching data: ", error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <div className="flex flex-col items-center">
          <div className="w-[50%] pt-36">
            {headerData.name ? (
              <div className="text-3xl  font-bold">{headerData.name}</div>
            ) : (
              <Skeleton className="text-3xl h-10 mb-10" />
            )}
            {headerData.name ? (
              <div
                className={`border-4 ${
                  headerData.isOpen ? "border-orange-400" : "border-black"
                }  my-8 rounded-md p-2`}
              >
                <div>
                  {headerData.avgRating ? (
                    <span className="flex justify-start items-center">
                      <img className="h-3.5 w-3.5 mr-1" src={ratingStar} />
                      {headerData.avgRating}
                    </span>
                  ) : (
                    <span className="flex justify-start items-center">
                      <img className="h-3.5 w-3.5 mr-1" src={ratingStar} />
                      --
                    </span>
                  )}
                </div>
                <div className="my-1">
                  {headerData.veg ? (
                    <img src={vegSVG} className="h-4 w-4" />
                  ) : (
                    <img src={nonvegSVG} className="h-4 w-4" />
                  )}
                </div>
                <div>{headerData.locality}</div>
                <div>{headerData.cuisines}</div>
                <div>{headerData.costForTwoMessage}</div>
              </div>
            ) : (
              <Skeleton count={3} className="w-max my-1" />
            )}
            {headerData.name ? (
              <div className="mx-[45%] mb-5 font-bold text-3xl">MENU</div>
            ) : (
              <Skeleton className="my-8 h-10" />
            )}

            {
              headerData.name?(
                <div className="flex space-x-2 mb-4">
                  <button className={`flex items-center border-2 border-green-500 p-1 rounded-md hover:text-white hover:bg-green-500 transition ${isVeg===1 ? 'bg-green-500 text-white' : ''} `} onClick={() => {isVeg===2 ? setVeg(1) : setVeg(2)}}><span><img src={vegSVG} className="mr-2 h-4 w-4"/></span>Veg</button>
                  <button className={`flex items-center border-2 border-red-600 p-1 rounded-md hover:text-white hover:bg-red-600 transition ${isVeg===0 ? 'bg-red-600 text-white' : ''}`} onClick={() => {isVeg===2 ? setVeg(0) : setVeg(2)}}><span><img src={nonvegSVG} className="mr-2 h-4 w-4"/></span>Non-Veg</button>
                </div>
              ):(
                <Skeleton count={1} className="h-6 mb-4" />
              )
            }
            
            {headerData.name ? (
              menuData.map((item, index) => {
                const card = item.card?.card;
                if (!card?.title) return null;
                if (card?.itemCards) {
                  return (
                    <Accordion
                      key={index}
                      index={index}
                      data={card}
                      wantVeg={isVeg}
                      resturantId={id}
                      restaurantData={{
                        name: headerData.name,
                        area: headerData.locality,
                        cuisines: headerData.cuisines,
                      }}
                    />
                  );
                }
                return null;
              })
            ) : (
              <Skeleton count={5} className="h-6 my-1" />
            )}
            {headerData.name ? (
              <div className="flex flex-col p-10 bg-black mt-10 text-white">
                <div>{footerData.area}</div>
                <div>{footerData.completeAddress}</div>
                <div>{footerData.text}</div>
                <div></div>
                <div></div>
              </div>
            ) : (
              <Skeleton className="h-14 mt-10" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
