import axios from "axios";
import { customerListActions } from "./customer-slice";
// import { authSliceAction } from "./auth-slice";
// import { customerListActions } from "./customers-slice";
// import { currentCustomerActions } from "./current-customer-slice";
// require("dotenv").config();

export const getCustomers = (
  typeFilter,
  startDateFilter,
  endDateFilter,
  nameFilter
) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/customer`, {
        params: {
          type: typeFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(customerListActions.loadCustomerList(res.data));
        }
      })
      .catch((err) => {
        if (err.response) {
          // toast.error("Not Authenticated ! for getting customer data");
          // localStorage.removeItem("ownerToken");
          // dispatch(authSliceAction.setIsAuthFalse());
          console.log(err);
        } else {
          // toast.error("Server Disconnected!");
          console.log(err);
        }
      });
  };
};

export const getTodaysBirthday = () => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/customer/todays-birthday`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(customerListActions.loadTodaysBirthday(res.data));
      })
      .catch((err) => {
        if (err.response) {
          // toast.error("Not Authenticated ! for getting customer data");
          // localStorage.removeItem("ownerToken");
          // dispatch(authSliceAction.setIsAuthFalse());
          console.log(err);
        } else {
          // toast.error("Server Disconnected!");
          console.log(err);
        }
      });
  };
};
