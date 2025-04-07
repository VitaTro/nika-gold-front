import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import userReducer from "./auth/userSlice";
import { filtersReducer } from "./filters/filterSlice";
import { popularProductsReducer } from "./popular/popularSlice";
import { productsReducer } from "./products/productsSlice";
import searchReducer from "./search/searchSlice";
import { shoppingCartReducer } from "./shopping/shoppingSlice";
import wishlistReducer from "./wishlist/wishlistSlice";
const rootReducer = combineReducers({
  auth: combineReducers({
    auth: authReducer,
    user: userReducer,
  }),
  products: combineReducers({
    products: productsReducer,
    popularProducts: popularProductsReducer,
    search: searchReducer,
  }),
  cart: shoppingCartReducer,
  wishlist: wishlistReducer,
  filters: filtersReducer,
});

export default rootReducer;
