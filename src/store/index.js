import { configureStore } from "@reduxjs/toolkit";
import servicesSlice from "./services-slice";
import currentCustomerSlice from "./current-customer-slice";
import customerListSlice from "./customer-slice";
import expense from "./expense-slice";
import branch from "./branch-slice";
import packageSlice from "./package-slice";
import promoCodeSlice from "./promocode-slice";
import inventoryItemSlice from "./inventory-item-slice";
import pointsCalculatorSlice from "./points-calculator-slice";
import staffSlice from "./staff-slice";
import authSlice from "./auth-slice";
import reportSlice from "./report-slice";
import messageSlice from "./message-slice";

const store = configureStore({
  reducer: {
    serviceList: servicesSlice.reducer,
    currentCustomer: currentCustomerSlice.reducer,
    customers: customerListSlice.reducer,
    expense: expense.reducer,
    branch: branch.reducer,
    packages: packageSlice.reducer,
    promocodes: promoCodeSlice.reducer,
    inventory: inventoryItemSlice.reducer,
    pointsCalculator: pointsCalculatorSlice.reducer,
    staff: staffSlice.reducer,
    authentication: authSlice.reducer,
    report: reportSlice.reducer,
    message: messageSlice.reducer,
  },
});

export default store;
