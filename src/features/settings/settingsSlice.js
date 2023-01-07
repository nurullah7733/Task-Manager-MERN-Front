import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loader: "d-none",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    showLoader(state) {
      state.loader = "";
    },
    hideLoader(state) {
      state.loader = "d-none";
    },
  },
});

export const { showLoader, hideLoader } = settingsSlice.actions;
export default settingsSlice.reducer;
