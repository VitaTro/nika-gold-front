import { createSlice } from "@reduxjs/toolkit";
import axios from "../axiosConfig";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    wishlist: [],
    shoppingCart: [],
    purchaseHistory: [],
  },
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setWishlist(state, action) {
      state.wishlist = action.payload;
    },
    setShoppingCart(state, action) {
      state.shoppingCart = action.payload;
    },
    setPurchaseHistory(state, action) {
      state.purchaseHistory = action.payload;
    },
  },
});
export const fetchUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/profile");
    dispatch(setProfile(response.data));
  } catch (error) {
    console.error("Failed to fetch user profile", error);
  }
};

export const fetchWishlist = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/user/wishlist");
    dispatch(setWishlist(response.data));
  } catch (error) {
    console.error("Failed to fetch wishlist", error);
  }
};
export const { setProfile, setWishlist, setShoppingCart, setPurchaseHistory } =
  userSlice.actions;
export default userSlice.reducer;
