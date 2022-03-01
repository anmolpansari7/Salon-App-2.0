import { createSlice } from "@reduxjs/toolkit";

const inventoryItemSlice = createSlice({
  name: "inventory-items",
  initialState: {
    inventoryItems: [],
  },
  reducers: {
    loadInventoryItems(state, action) {
      const items = action.payload;
      state.inventoryItems = items;
    },
  },
});

export const inventoryItemActions = inventoryItemSlice.actions;

export default inventoryItemSlice;
