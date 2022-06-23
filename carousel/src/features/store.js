import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";
const store = configureStore({
  reducer: {
    carousel: carouselReducer,
  },
});

export default store;