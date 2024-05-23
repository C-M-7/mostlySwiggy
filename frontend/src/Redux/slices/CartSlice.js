import {createSlice} from '@reduxjs/toolkit';
import { enableMapSet } from 'immer'; 

enableMapSet();

export const cartDataSlice = createSlice({
    name : 'CartSlice',
    initialState: new Map(),
    reducers:{
        setCartSlice:(state, action)=>{
            const item = action.payload;
            if(state.has(item)) state.set(item, state.get(item)+1);
            else state.set(item, 1);
            return state
        },
        removeCartSlice:(state, action)=>{
            const item = action.payload;
            const quantity = state.get(item);
            if(quantity > 1) state.set(item, quantity-1);
            else state.delete(item);
            return state;
        }
    }
})

export const {setCartSlice, removeCartSlice} = cartDataSlice.actions;
export default cartDataSlice.reducer;