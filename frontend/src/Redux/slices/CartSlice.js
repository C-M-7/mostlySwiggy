import {createSlice} from '@reduxjs/toolkit';

export const cartDataSlice = createSlice({
    name : 'CartSlice',
    initialState: [],
    reducers:{
        setCartSlice:(state, action)=>{
            const index = state.findIndex((item) => item.data.dishName === action.payload.dishName);
            if(index !== -1){
                state[index].quantity = state[index].quantity+1;
            }
            else{
                state.push({data : action.payload, quantity : 1});
            }
            return state;
        },
        removeCartSlice:(state, action)=>{
            const index = state.findIndex((item) => item.data.dishName === action.payload.dishName);
            if(index !== -1){
                const q = state[index].quantity;
                if(q > 1) state[index].quantity--;
                else state.splice(index, 1);
            }
            return state;
        }
    }
})

export const {setCartSlice, removeCartSlice} = cartDataSlice.actions;
export default cartDataSlice.reducer;