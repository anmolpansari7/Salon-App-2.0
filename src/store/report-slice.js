import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report-slice",
  initialState: {
    report: [],
  },
  reducers: {
    loadReport(state, action) {
      state.report = action.payload;
    },
  },
});

export const reportActions = reportSlice.actions;

export default reportSlice;
