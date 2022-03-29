import { createSlice } from "@reduxjs/toolkit";

const pointsCalculatorSlice = createSlice({
  name: "points-calculator",
  initialState: {
    forRupee: 0,
    givenPoints: 0,
    forPoints: 0,
    givenDiscount: 0,
  },
  reducers: {
    loadForRupee(state, action) {
      const data = action.payload;
      state.forRupee = data;
    },
    loadGivenPoints(state, action) {
      const data = action.payload;
      state.givenPoints = data;
    },
    loadForPoints(state, action) {
      const data = action.payload;
      state.forPoints = data;
    },
    loadGivenDiscount(state, action) {
      const data = action.payload;
      state.givenDiscount = data;
    },
  },
});

export const pointCalculatorActions = pointsCalculatorSlice.actions;

export default pointsCalculatorSlice;
