import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    country: "",
    city: "",
    dateOfBirth: "",
    gender: "",
    phoneCountryCode: "",
    phoneNo: "",
    whatsappSubscribe: false,
    role: "",
  },
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        country: "",
        city: "",
        dateOfBirth: "",
        gender: "",
        phoneCountryCode: "",
        phoneNo: "",
        whatsappSubscribe: false,
        role: "",
      };
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
