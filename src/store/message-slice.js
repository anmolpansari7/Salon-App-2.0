import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message-slice",
  initialState: {
    previousMessages: [],
  },
  reducers: {
    loadPreviousMessages(state, action) {
      const items = action.payload;
      state.previousMessages = items;
    },
  },
});

export const messageSliceActions = messageSlice.actions;

export default messageSlice;
