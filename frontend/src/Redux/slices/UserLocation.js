import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name:'UserLocation',
    initialState: { 
        latitude: null,
        longitude: null,
    },
    reducers:{
        setuserlocation:(state, action)=>{
            state.latitude = action.payload.latitude;
            state.longitude = action.payload.longitude;
        }
    }
})

export const {setuserlocation} = locationSlice.actions
export default locationSlice.reducer;