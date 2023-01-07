import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  summary: [],
};

const summaryTasksSlice = createSlice({
  name: "summaryTask",
  initialState,
  reducers: {
    setSummary(state, action) {
      state.summary = action.payload;
    },
  },
});

export const { setSummary } = summaryTasksSlice.actions;
export default summaryTasksSlice.reducer;
