import {configureStore} from '@reduxjs/toolkit'
import  locationSlice  from './slices/UserLocation'
import  restaurantDataSlice  from './slices/RestaurantsData'

export const store = configureStore({
    reducer:{
        userlocation : locationSlice,
        restaurantsData : restaurantDataSlice,
    },
})