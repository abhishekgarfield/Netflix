import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const Activityslice = createSlice({
  name: "activity",
  initialState,
  reducers: {
    setIsloading: (state, action) => {
      console.log("in reducer");
      state.isLoading = action.payload;
    },
  },
});
export const { setIsloading } = Activityslice.actions;
export default Activityslice.reducer;
