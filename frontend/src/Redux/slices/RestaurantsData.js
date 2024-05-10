import {createSlice} from '@reduxjs/toolkit';

export const restaurantDataSlice = createSlice({
    name:'restaurantData',
    initialState: null,
    reducers:{
        setRestaurantData:(state, action)=>{
            state = action.payload;
            // console.log(state)
        }
    }
})

export const {setRestaurantData} = restaurantDataSlice.actions;
export default restaurantDataSlice.reducer;