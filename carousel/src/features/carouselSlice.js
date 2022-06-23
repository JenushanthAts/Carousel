import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemLists: [],
  isPending: false,
};

const carouselSlice = createSlice({
  name: "Carousel",
  initialState,
  reducers: {
    startfetchingData: (state) => {
      state.isPending = true;
    },
    fetchingData: (state, { payload }) => {
      state.isPending = false;
      state.itemLists = payload;
    },
  },
});
export const { startfetchingData, fetchingData } =
carouselSlice.actions;
export default carouselSlice.reducer;
