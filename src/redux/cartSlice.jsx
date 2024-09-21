import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];
// console.log(initialState);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id != action.payload.id);
    },
    incrementQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.id === action.payload) {
          item.quantity++;
        }
        return item;
      });
    },
    decrementQuantity: (state, action) => {
      state = state.map((item) => {
        if (item.quantity !== 1) {
          if (item.id === action.payload) {
            item.quantity--;
          }
        }
        return item;
      });
    },
    refreshCart: (state, action) => {
      return action.payload; // Replace the current state with the new cart data
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  refreshCart,
} = cartSlice.actions;

export default cartSlice.reducer;
