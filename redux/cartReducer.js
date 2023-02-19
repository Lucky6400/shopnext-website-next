import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const currentItem = state.items.findIndex(item => item.title === action.payload.title);
            if (currentItem !== -1) {
                state.items[currentItem].quantity += 1
            } else {
                state.items.push(action.payload)
            }
        },

        addOne(state, action){
            const currentItem = state.items.findIndex(item => item.title === action.payload);
            state.items[currentItem].quantity += 1
        },

        subtractOne(state, action) {
            const currentItem = state.items.findIndex(item => item.title === action.payload);
            state.items[currentItem].quantity -= 1;
        }
    }
})

export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
