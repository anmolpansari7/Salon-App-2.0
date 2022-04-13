import axios from "axios";
import { currentCustomerActions } from "./current-customer-slice";
// import { authSliceAction } from "./auth-slice";
// import { customerListActions } from "./customers-slice";
// import { currentCustomerActions } from "./current-customer-slice";
// require("dotenv").config();

export const sendNewCustomerData = (newCustomer, navigate, toast) => {
  return (dispatch) => {
    // const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/customer/add`,
        {
          gender: newCustomer.gender,
          name: newCustomer.name,
          contact: newCustomer.contact,
          dob: newCustomer.dob,
          address: newCustomer.address,
        }
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        const newCustomerId = res.data;
        toast({
          title: "Customer Added.",
          description: "You have added a new customer.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate(`/customer/${newCustomerId}`);
        // dispatch(currentCustomerActions.clearCurrCustomerOrders());
        // dispatch(currentCustomerActions.setPageNumberOne());
        console.log("Customer Added !");
      })
      .catch((err) => {
        if (err.response) {
          //   toast.error("Not Authenticated !");
          //   localStorage.removeItem("ownerToken");
          //   dispatch(authSliceAction.setIsAuthFalse());
          console.log(err);
        } else {
          //   toast.error("Server Disconnected!");
          console.log(err);
        }
      });
  };
};

export const getCurrentCustomerData = (id) => {
  return (dispatch) => {
    // const ownerToken = localStorage.getItem("ownerToken");

    const url = `${process.env.REACT_APP_BASE_URL}/customer/details/${id}`;
    axios
      .get(
        url
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(currentCustomerActions.loadCurrCustomer(res.data));
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

export const getCurrentCustomerOrders = (id) => {
  return (dispatch) => {
    const url = `${process.env.REACT_APP_BASE_URL}/customer/details/${id}/orders`;
    axios
      .get(
        url
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(currentCustomerActions.loadCurrCustomerOrders(res.data));
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

export const updateCurrentCustomerData = (id, points, dues) => {
  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/customer/update-dues-points/${id}`,
        {
          points: points,
          dues: dues,
        }
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(getCurrentCustomerData(id));
        }
        console.log("Points and Dues Updated !");
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
