import { createSlice } from "@reduxjs/toolkit";
import {
  addProductToWishlist,
  getWishlist,
  removeProductFromWishlist,
} from "./operationWishlist";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWishlist.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = payload;
      })
      .addCase(getWishlist.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addProductToWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addProductToWishlist.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products.push(payload);
      })
      .addCase(addProductToWishlist.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(removeProductFromWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeProductFromWishlist.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.products = state.products.filter(
          (product) => product._id !== payload
        );
      })
      .addCase(removeProductFromWishlist.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const wishlistReducer = wishlistSlice.reducer;
