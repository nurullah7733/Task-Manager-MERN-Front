import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: [],
};

const ProfileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setProfileValue } = ProfileSlice.actions;
export default ProfileSlice.reducer;
