import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import loaderReducer from "../features/loader/loader";
const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loaderReducer,
  },
});

export default store;
