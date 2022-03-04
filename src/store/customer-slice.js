import { createSlice } from "@reduxjs/toolkit";

const customerListSlice = createSlice({
  name: "customer-list",
  initialState: {
    suggestions: [],
    customerList: [],
    totalFemaleCustomers: 0,
    totalMaleCustomers: 0,
    todaysBirthday: [],
  },
  reducers: {
    addSuggestions(state, action) {
      const suggestedCustomers = action.payload;
      state.suggestions = suggestedCustomers;
    },
    clearSuggestions(state) {
      state.suggestions = [];
    },
    loadCustomerList(state, action) {
      const customers = action.payload;
      state.customerList = customers;
    },
    loadTotalFemaleCustomers(state, action) {
      const total = action.payload;
      state.totalFemaleCustomers = total;
    },
    loadTotalMaleCustomers(state, action) {
      const total = action.payload;
      state.totalMaleCustomers = total;
    },
    loadTodaysBirthday(state, action) {
      const customers = action.payload;
      state.todaysBirthday = customers;
    },
  },
});

export const customerListActions = customerListSlice.actions;

export default customerListSlice;
