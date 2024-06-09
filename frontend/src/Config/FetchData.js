import { isMobile } from "react-device-detect";

async function fetchData(location) {
    const { latitude, longitude } = location;
    const url = isMobile
                ? `https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/mapi/homepage/getCards?lat=${latitude}&lng=${longitude}`
                : `https://thingproxy-760k.onrender.com/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=${latitude}&lng=${longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error('Failed to fetch data from Swiggy API');
        }

        const responseData = await response.json();

        const cards = isMobile ? responseData.data.success.cards : responseData.data.cards;

        // const locUnavailable = isMobile
        //         ? cards.find(
        //               (card) =>
        //                   card.gridWidget &&
        //                   card.gridWidget.gridElements &&
        //                   card.gridWidget.gridElements.infoWithStyle["@type"] ===
        //                       "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent",
        //           )
        //         : cards.find(
        //               (card) =>
        //                   card.card &&
        //                   card.card.card &&
        //                   card.card.card["@type"] ===
        //                       "type.googleapis.com/swiggy.seo.widgets.v1.SwiggyNotPresent",
        //           );

        const desiredCard = isMobile
                ? cards.find(
                      (card) =>
                          card.gridWidget &&
                          card.gridWidget.gridElements &&
                          card.gridWidget.gridElements.infoWithStyle["@type"] ===
                              "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                  )
                : cards.find(
                      (card) =>
                          card.card &&
                          card.card.card &&
                          card.card.card.gridElements &&
                          card.card.card.gridElements.infoWithStyle &&
                          card.card.card.gridElements.infoWithStyle["@type"] ===
                              "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                  );

        const restaurants = isMobile
                  ? desiredCard?.gridWidget?.gridElements?.infoWithStyle?.restaurants
                  : desiredCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        const filteredDetails = restaurants.map((shop) => {
            const {
                id,
                name,
                cuisines,
                avgRatingString,
                sla,
                cloudinaryImageId,
                veg,
                costForTwo,
            } = shop.info;
            const { deliveryTime } = sla;
            return {
                id,
                name,
                cuisines,
                avgRatingString,
                deliveryTime,
                cloudinaryImageId,
                veg,
                costForTwo,
            };
        });
        return filteredDetails; // Returning the parsed JSON data
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; 
    }
}

export default fetchData;