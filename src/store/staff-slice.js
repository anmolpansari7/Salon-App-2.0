import { createSlice } from "@reduxjs/toolkit";

const staffSlice = createSlice({
  name: "staffList",
  initialState: {
    staff: [],
  },
  reducers: {
    loadStaff(state, action) {
      const data = action.payload;
      state.staff = data;
    },
  },
});

export const staffSliceActions = staffSlice.actions;

export default staffSlice;
