import { createSlice } from "@reduxjs/toolkit";

const currentCustomerSlice = createSlice({
  name: "current-customer",
  initialState: {
    currentCustomer: {
      _id: "",
      gender: "",
      name: "",
      contact: "",
      dob: "",
      points: 0,
      dues: 0,
      address: "",
    },
    currentCustomerOrders: [],
    // pageNumber: 1,
    // hasMore: false,
    // loading: true,
  },
  reducers: {
    loadCurrCustomer(state, action) {
      const customer = action.payload;
      state.currentCustomer = customer;
    },
    // loadCurrCustomerOrders(state, action) {
    //   const orders = action.payload;
    //   state.currentCustomerOrders = [...state.currentCustomerOrders, ...orders];
    // },
    // clearCurrCustomerOrders(state) {
    //   state.currentCustomerOrders = [];
    // },
    // incremetPageNumber(state) {
    //   state.pageNumber = state.pageNumber + 1;
    // },
    // setPageNumberOne(state) {
    //   state.pageNumber = 1;
    // },
    // setHasMoreTrue(state) {
    //   state.hasMore = true;
    // },
    // setHasMoreFalse(state) {
    //   state.hasMore = false;
    // },
    // setLoadingTrue(state) {
    //   state.loading = true;
    // },
    // setLoadingFalse(state) {
    //   state.loading = false;
    // },
  },
});

export const currentCustomerActions = currentCustomerSlice.actions;

export default currentCustomerSlice;
