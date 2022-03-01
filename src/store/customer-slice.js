import { createSlice } from "@reduxjs/toolkit";

const customerListSlice = createSlice({
  name: "customer-list",
  initialState: {
    suggestions: [],
    // totalVisitedCustomers: 0,
  },
  reducers: {
    // setTotalVisitedCustomers(state, action) {
    //   const total = action.payload;
    //   state.totalVisitedCustomers = total;
    // },
    addSuggestions(state, action) {
      const suggestedCustomers = action.payload;
      state.suggestions = suggestedCustomers;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
  },
});

export const customerListActions = customerListSlice.actions;

export default customerListSlice;
