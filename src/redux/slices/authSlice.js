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
      console.log("Before State:", state);
      state.isLoggedIn = true;
      state.userName = action.payload.userName;
      state.userPhoto = action.payload.userPhoto;
      console.log("After State:", state);
    },
    logout(state) {
      console.log("Logout Action Triggered");
      console.log("Before State:", state);
      state.isLoggedIn = false;
      state.userName = "";
      state.userPhoto = "";
      console.log("After State:", state);
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
