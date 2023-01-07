import { configureStore } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";
import selectTasksSlice from "../features/selectTasks/selectTasksSlice";
import settingsSlice from "../features/settings/settingsSlice";
import summaryTasksSlice from "../features/summaryTask/summaryTaskSlice";
export default configureStore({
  reducer: {
    settings: settingsSlice,
    tasks: selectTasksSlice,
    summary: summaryTasksSlice,
    profile: profileSlice,
  },
});
