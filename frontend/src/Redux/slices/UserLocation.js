import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name:'UserLocation',
    initialState: {lat:null, long:null},
    reducers:{
        setuserlocation:(state, action)=>{
            state.lat = action.payload.lat;
            state.long = action.payload.long;
        }
    }
})

export const {setuserlocation} = locationSlice.actions
export default locationSlice.reducer;