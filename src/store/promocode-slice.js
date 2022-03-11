import { createSlice } from "@reduxjs/toolkit";

const promoCodeSlice = createSlice({
  name: "promocodes",
  initialState: {
    previousPromoCodes: [],
    allActivePromoCodes: [],
  },
  reducers: {
    loadPreviousPromoCodes(state, action) {
      const prevPromoCodes = action.payload;
      state.previousPromoCodes = prevPromoCodes;
    },
    loadAllActivePromoCodes(state, action) {
      const activePromoCodes = action.payload;
      state.allActivePromoCodes = activePromoCodes;
    },
  },
});

export const promoCodeActions = promoCodeSlice.actions;

export default promoCodeSlice;
