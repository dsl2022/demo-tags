import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

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
