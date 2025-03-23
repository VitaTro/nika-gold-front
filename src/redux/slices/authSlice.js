import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userName: "",
  userPhoto: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("Login Action:", action.payload);
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.userPhoto = action.payload.userPhoto;
    },
    logout(state) {
      console.log("Logout Action:");
      state.isLoggedIn = false;
      state.userName = "";
      state.userPhoto = "";
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
