import { createSlice } from "@reduxjs/toolkit";

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [] },
  reducers: {
    loadServices(state, action) {
      const items = action.payload;
      state.services = items;
    },
  },
});

export const servicesAction = servicesSlice.actions;

export default servicesSlice;
