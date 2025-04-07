import { createSlice } from "@reduxjs/toolkit";
import {
  addProductToCart,
  deleteProductFromCart,
  getShoppingCart,
} from "./operationShopping";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    clearCart(state) {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getShoppingCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShoppingCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getShoppingCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteProductFromCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProductFromCart.fulfilled, (state, { payload }) => {
        state.products = state.products.filter(
          (product) => product._id !== payload
        );
        state.isLoading = false;
      })
      .addCase(deleteProductFromCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addProductToCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProductToCart.fulfilled, (state, { payload }) => {
        state.products.push(payload);
        state.isLoading = false;
      })
      .addCase(addProductToCart.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { clearCart } = shoppingCartSlice.actions;
export const shoppingCartReducer = shoppingCartSlice.reducer;
