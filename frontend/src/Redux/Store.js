import {configureStore} from '@reduxjs/toolkit'
import  locationSlice  from './slices/UserLocation'
import  restaurantDataSlice  from './slices/RestaurantsData'
import  restaurantCuisinesSlice  from './slices/RestaurantsCuisines'

export const store = configureStore({
    reducer:{
        UserLocation : locationSlice,
        RestaurantsData : restaurantDataSlice,
        RestaurantsCuisines : restaurantCuisinesSlice,
    },
})