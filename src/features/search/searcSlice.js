import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// import store from "../../../redux/store";
import movies from "../../api/movies";

const initialState = {
  search,
};

// const getState = createAsyncThu0nk("getTag", async (dispatch, getState) => {
//   return getState();
// });

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    updateTag: (state, action) => {
      state[action.payload.id] = action.payload.tagNames;
      return state;
    },
  },
});

export const { updateTag } = tagsSlice.actions;
export const getTag = (state) => state;
export default tagsSlice.reducer;
