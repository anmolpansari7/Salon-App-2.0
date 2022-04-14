import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report-slice",
  initialState: {
    report: [],
    reportSummary: {
      totalCustomers: 0,
      totalAmount: 0,
      paidAmount: 0,
      pointsUsed: 0,
      pointsEarned: 0,
    },
    todaysReportSummary: {
      totalCustomers: 0,
      totalAmount: 0,
      paidAmount: 0,
      pointsUsed: 0,
      pointsEarned: 0,
    },
  },
  reducers: {
    loadReport(state, action) {
      state.report = action.payload;
    },
    loadReportSummary(state, action) {
      const summary = {
        totalCustomers: action.payload.totalCustomers,
        totalAmount: action.payload.totalAmount,
        paidAmount: action.payload.paidAmount,
        pointsUsed: action.payload.pointsUsed,
        pointsEarned: action.payload.pointsEarned,
      };
      state.reportSummary = summary;
    },
    loadTodaysReportSummary(state, action) {
      const summary = {
        totalCustomers: action.payload.totalCustomers,
        totalAmount: action.payload.totalAmount,
        paidAmount: action.payload.paidAmount,
        pointsUsed: action.payload.pointsUsed,
        pointsEarned: action.payload.pointsEarned,
      };
      state.todaysReportSummary = summary;
    },
  },
});

export const reportActions = reportSlice.actions;

export default reportSlice;
