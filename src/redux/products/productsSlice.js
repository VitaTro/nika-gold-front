import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getProductsList } from "./operationProducts";

const initialState = {
  productsList: [],
  isLoading: false,
  error: null,
};

const extraActions = [getProductsList];

const getActions = (type) =>
  isAnyOf(...extraActions.map((action) => action[type]));

const getProductsListFulfilledReducer = (state, action) => {
  state.productsList = action.payload;
};
const productsAnyPendingReducer = (state) => {
  state.isLoading = true;
  state.error = null;
};
const productsAnyFulfilledReducer = (state) => {
  state.isLoading = false;
  state.error = null;
};
const productsAnyRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getProductsList.fulfilled, getProductsListFulfilledReducer)
      .addMatcher(getActions("pending"), productsAnyPendingReducer)
      .addMatcher(getActions("rejected"), productsAnyRejectedReducer)
      .addMatcher(getActions("fulfilled"), productsAnyFulfilledReducer),
});

export const productsReducer = productsSlice.reducer;
