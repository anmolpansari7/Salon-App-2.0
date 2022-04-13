import { createSlice } from "@reduxjs/toolkit";

const isBranchPresent =
  localStorage.getItem("branchToken") === null ? false : true;

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    isAuthOwner: false,
    isAuthBranch: false,
    branchId: "",
  },
  reducers: {
    setIsAuthOwnerTrue(state) {
      state.isAuthOwner = true;
    },
    setIsAuthOwnerFalse(state) {
      state.isAuthOwner = false;
    },
    setIsAuthBranchTrue(state) {
      state.isAuthBranch = true;
    },
    setIsAuthBranchFalse(state) {
      state.isAuthBranch = false;
    },
    setBranchId(state, action) {
      state.branchId = action.payload;
    },
  },
});

export const authSliceAction = authSlice.actions;

export default authSlice;
