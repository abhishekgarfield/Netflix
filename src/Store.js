import { configureStore } from "@reduxjs/toolkit";
import Activityslice from "./Slice/activity";

const Store = configureStore({
  reducer: {
    activity: Activityslice,
  },
});

export default Store;
