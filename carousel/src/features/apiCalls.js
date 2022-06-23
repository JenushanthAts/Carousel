import axios from "axios";
import { startfetchingData, fetchingData } from "./carouselSlice"; //actions

export const fetchingItems = async (slides, dispatch) => {
  dispatch(startfetchingData());
  try {
    const res = await axios.get(
      `http://localhost:3600/api/carousel?slides=${slides}`
    );
    dispatch(fetchingData(res.data));
  } catch (err) {
    console.log(err);
  }
};
