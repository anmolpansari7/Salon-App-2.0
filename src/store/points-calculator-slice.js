import { createSlice } from "@reduxjs/toolkit";

const pointsCalculatorSlice = createSlice({
  name: "points-calculator",
  initialState: {
    forRupeeMale: 0,
    givenPointsMale: 0,
    forPointsMale: 0,
    givenDiscountMale: 0,
    forRupeeFemale: 0,
    givenPointsFemale: 0,
    forPointsFemale: 0,
    givenDiscountFemale: 0,
  },
  reducers: {
    loadForRupeeMale(state, action) {
      const data = action.payload;
      state.forRupeeMale = data;
    },
    loadGivenPointsMale(state, action) {
      const data = action.payload;
      state.givenPointsMale = data;
    },
    loadForPointsMale(state, action) {
      const data = action.payload;
      state.forPointsMale = data;
    },
    loadGivenDiscountMale(state, action) {
      const data = action.payload;
      state.givenDiscountMale = data;
    },
    loadForRupeeFemale(state, action) {
      const data = action.payload;
      state.forRupeeFemale = data;
    },
    loadGivenPointsFemale(state, action) {
      const data = action.payload;
      state.givenPointsFemale = data;
    },
    loadForPointsFemale(state, action) {
      const data = action.payload;
      state.forPointsFemale = data;
    },
    loadGivenDiscountFemale(state, action) {
      const data = action.payload;
      state.givenDiscountFemale = data;
    },
  },
});

export const pointCalculatorActions = pointsCalculatorSlice.actions;

export default pointsCalculatorSlice;
