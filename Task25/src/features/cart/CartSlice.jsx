import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
    },
    emptyCart: (state) => {
      state.products = [];
      state.totalPrice = 0;
    },
    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const product = state.products.find((p) => p.id === id);
      if (product) {
        product.quantity += change;
      }
    },
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    updateTotalPrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  emptyCart,
  updateQuantity,
  toggleCart,
  updateTotalPrice,
} = cartSlice.actions;

export default cartSlice.reducer;