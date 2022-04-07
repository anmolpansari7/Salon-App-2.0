import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order-slice",
  initialState: {},
  reducers: {},
});

export const orderSliceActions = orderSlice.actions;
export default orderSlice;
