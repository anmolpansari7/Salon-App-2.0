import { createSlice } from "@reduxjs/toolkit";

const packageSlice = createSlice({
  name: "packages",
  initialState: {
    previousPackages: [],
    suggestions: [],
  },
  reducers: {
    addSuggestions(state, action) {
      const suggestedCustomers = action.payload;
      state.suggestions = suggestedCustomers;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
    loadPreviousPackages(state, action) {
      const prevPackages = action.payload;
      state.previousPackages = prevPackages;
    },
  },
});

export const packageActions = packageSlice.actions;

export default packageSlice;
