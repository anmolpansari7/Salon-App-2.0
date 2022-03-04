import { createSlice } from "@reduxjs/toolkit";

const branchSlice = createSlice({
  name: "branch",
  initialState: {
    branchList: [],
  },
  reducers: {
    loadBranches(state, action) {
      const branches = action.payload;
      state.branchList = branches;
    },
  },
});

export const branchAction = branchSlice.actions;

export default branchSlice;
