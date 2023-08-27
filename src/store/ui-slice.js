import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    message: null,
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
