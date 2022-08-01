import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/";
const json = require('./shop.json');


// slice redux 
const shopSlice = createSlice({
    name:'shop',
    initialState: json,
    reducers: {
        addItem: (state, action) => {
            const newItem = {
                id:Date.now(),
                name:action.payload.name,
                shop:action.payload.shop
            }
            state.push(newItem);
        },
        removeItem: (state, action) => {
            state = state.filter((t)=> t.id !== action.payload)
            return state
        }
    }
})

// store redux use redux toolkit
export const {addItem, removeItem} = shopSlice.actions;
export const store = configureStore({
    reducer: {
        shop: shopSlice.reducer
    }
})