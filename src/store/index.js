import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./services-slice";
import currentCustomerSlice from "./current-customer-slice";
import customerListSlice from "./customer-slice";
import packageSlice from "./package-slice";
import expense from "./expense-slice";
import branch from "./branch-slice";

// import dealListSlice from "./deal-list-slice";
// import pointsCalculatorSlice from "./points-calculator-slice";
// import priceListSlice from "./price-list-slice";
// import reportSlice from "./report-slice";
// import authSlice from "./auth-slice";

const store = configureStore({
  reducer: {
    serviceList: servicesSlice.reducer,
    currentCustomer: currentCustomerSlice.reducer,
    customers: customerListSlice.reducer,
    packages: packageSlice.reducer,
    expense: expense.reducer,
    branch: branch.reducer,
    // priceList: priceListSlice.reducer,
    // dealList: dealListSlice.reducer,
    // pointsCalculator: pointsCalculatorSlice.reducer,
    // report: reportSlice.reducer,
    // authentication: authSlice.reducer,
  },
});

export default store;
