import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  new: [],
  progress: [],
  completed: [],
  canceled: [],
};

const selectTasksSlice = createSlice({
  name: "selectTasks",
  initialState,
  reducers: {
    setNewTasks(state, action) {
      state.new = action.payload;
    },
    deleteNewTasks(state, action) {
      state.new = state.new.filter((item) => item._id !== action.payload);
    },
    setProgressTasks(state, action) {
      state.progress = action.payload;
    },
    deleteProgressTasks(state, action) {
      state.progress = state.progress.filter(
        (item) => item._id !== action.payload
      );
    },
    setCompletedTasks(state, action) {
      state.completed = action.payload;
    },
    deleteCompletedTasks(state, action) {
      state.completed = state.completed.filter(
        (item) => item._id !== action.payload
      );
    },
    setCanceledTasks(state, action) {
      state.canceled = action.payload;
    },
    deleteCanceledTasks(state, action) {
      state.canceled = state.canceled.filter(
        (item) => item._id !== action.payload
      );
    },

    setChangeStatus(state, action) {
      const id = action.payload.id;
      const status = action.payload.status;
      // let result1 = state.new.filter((a) => a._id == id);
      // let result2 = state.canceled.filter((a) => a._id == id);
      // let result3 = state.completed.filter((a) => a._id == id);
      // let result4 = state.progress.filter((a) => a._id == id);

      if (status !== "new") {
        state.new = state.new.filter((a) => a._id !== id);
      }
      if (status !== "canceled") {
        console.log(status, "canceled");
        state.canceled = state.canceled.filter((a) => a._id !== id);
      }
      if (status !== "completed") {
        console.log(status, "completed");
        state.completed = state.completed.filter((a) => a._id !== id);
      }
      if (status !== "progress") {
        console.log(status, "progress");
        state.progress = state.progress.filter((a) => a._id !== id);
      }
    },
  },
});

export const {
  setCanceledTasks,
  deleteNewTasks,
  setCompletedTasks,
  deleteCanceledTasks,
  deleteCompletedTasks,
  deleteProgressTasks,
  setNewTasks,
  setProgressTasks,
  setChangeStatus,
} = selectTasksSlice.actions;
export default selectTasksSlice.reducer;
