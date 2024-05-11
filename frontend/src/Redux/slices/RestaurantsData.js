import {createSlice} from '@reduxjs/toolkit';

export const restaurantDataSlice = createSlice({
    name:'RestaurantsData',
    initialState: null,
    reducers:{
        setRestaurantData:(state, action)=>{
            state = action.payload
            return state;
            // return action.payload;
        }
    }
})

export const {setRestaurantData} = restaurantDataSlice.actions;
export default restaurantDataSlice.reducer;