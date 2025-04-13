import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import loaderReducer from "../features/loader/loader";
import countryDataReducer from "../features/countryData/countryDataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    loading: loaderReducer,
    countryData: countryDataReducer,
  },
});

export default store;
