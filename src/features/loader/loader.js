import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    setLoader: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
