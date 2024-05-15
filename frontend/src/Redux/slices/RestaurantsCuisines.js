import {createSlice} from '@reduxjs/toolkit';

export const restaurantCuisinesSlice = createSlice({
    name: 'RestaurantsCuisines',
    initialState: null,
    reducers:{
        setRestaurantCuisines:(state, action)=>{
            state = action.payload;
            return state;
        }
    }
})

export const {setRestaurantCuisines} = restaurantCuisinesSlice.actions;
export default restaurantCuisinesSlice.reducer;