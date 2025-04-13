import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countryData: [
    {
      id: 0,
      nameAscii: "",
      codes2: "",
      flag: "",
      isdCode: "",
      regionSet: [
        {
          id: 0,
          nameAscii: "",
        },
      ],
    },
  ],
};

const countryDataSlice = createSlice({
  name: "countryData",
  initialState,
  reducers: {
    setCountryData: (state, action) => {
      // Ensure immutability by returning a new state
      return { ...state, countryData: action.payload };
    },
    resetCountryData: () => {
      // Reset to initial state
      return initialState;
    },
  },
});

export const { setCountryData, resetCountryData } = countryDataSlice.actions;
export default countryDataSlice.reducer;
