import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    categoryList: [],
    previousExpenses: [],
    expenseSummary: [],
  },
  reducers: {
    loadExpenseCategories(state, action) {
      const categories = action.payload;
      state.categoryList = categories;
    },
    loadPreviousExpenses(state, action) {
      const expenses = action.payload;
      state.previousExpenses = expenses;
    },
    loadExpenseSummary(state, action) {
      const expenses = action.payload;
      state.expenseSummary = expenses;
    },
  },
});

export const expenseActions = expenseSlice.actions;

export default expenseSlice;
