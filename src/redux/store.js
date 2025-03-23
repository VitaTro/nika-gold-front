import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
export default configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
