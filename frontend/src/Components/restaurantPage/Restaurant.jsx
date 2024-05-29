import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../mainPage/Navbar';
import Accordion from './Accordion';
import Loader from '../loader/Loader';
import NoRestaurants from '../loader/NoRestaurants';

function Restaurant() {
  const {id} = useParams();
  const[headerData, setheaderData] = useState('');
  const[menuData, setMenuData] = useState([]);
  const[footerData, setfooterData] = useState('');
  const[loader, setLoader] = useState(true);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    try{
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8947446&lng=75.8301169&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`;
      const main_url = "https://thingproxy-760k.onrender.com/fetch/" + url;
      const response = await fetch(main_url);
      const json = await response.json();
      if(json) setLoader(false);
      const data = json?.data?.cards;
      console.log(data);
      const headerFinder = data.find(
        (card) =>
            card.card &&
            card.card.card &&
            card.card.card["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      );
      const header = headerFinder?.card?.card?.info;
      const menuFinder = data.find((card) => "groupedCard" in card);
      const menu = menuFinder.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const { imageId, text } = menu[menu.length - 2]?.card?.card || {};
      const { name, area, completeAddress } = menu[menu.length - 1]?.card?.card || {};
      const footer = { imageId, text, name, area, completeAddress };
      
      setheaderData(header || {});
      setMenuData(menu || {});
      setfooterData(footer || {});
      
      console.log("header ", header);  
      console.log("menu ", menu);
      console.log("footer ", footer);  

    }
    catch(error){
      console.log('Error occured in fetching data: ',error);
    }
  }

  return (
    <>
        {
          loader 
          ?
          <div>
              <Loader/>
          </div>
          :
          <div>
          <Navbar/>
          <div className='flex flex-col items-center'>
            <div className='w-[50%] pt-36'>
              <div className='text-3xl  font-bold'>{headerData.name}</div>
              <div className={`border-4 ${headerData.isOpen ? 'border-orange-400' : 'border-black'}  my-8 rounded-md p-2`}>
                <div>{headerData.avgRating}</div>
                <div>{headerData.veg ? 'veg' : 'non-veg'}</div>
                <div>{headerData.locality}</div>
                <div>{headerData.cuisines}</div>
                <div>{headerData.costForTwoMessage}</div>
              </div>
              <div className='mx-[45%] mb-5 font-bold text-2xl'>MENU</div>
              {
                menuData.map((item, index)=>{
                  const card = item.card?.card;
                  if(!card?.title) return null;
                  if(card?.itemCards){
                    return(
                      <Accordion
                        key={index}
                        index={index}
                        data={card}
                        resturantId = {id}
                        restaurantData={{
                          name : headerData.name,
                          area : headerData.locality,
                          cuisines : headerData.cuisines,
                        }}
                      />
                    );
                  }
                })
              }
            <div className='flex flex-col border-4 border-black bg-gray-300 mt-10'>
              <span className='font-bold text-2xl'>Footer</span>
              <div>{footerData.area}</div>
              <div>{footerData.completeAddress}</div>
              <div>{footerData.text}</div>
              <div></div>
              <div></div>
            </div>
            </div>
          </div>
        </div>
        }
    </>
  )
}

export default Restaurant