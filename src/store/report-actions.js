import axios from "axios";
import { reportActions } from "./report-slice";

export const getReport = (
  branchFilter,
  staffFilter,
  startDateFilter,
  endDateFilter,
  nameFilter
) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report`, {
        params: {
          branch: branchFilter,
          staff: staffFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(reportActions.loadReport(res.data));
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

export const getReportSummary = (
  branchFilter,
  staffFilter,
  startDateFilter,
  endDateFilter,
  nameFilter
) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/report-summary`, {
        params: {
          branch: branchFilter,
          staff: staffFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
      })
      .then((res) => {
        dispatch(reportActions.loadReportSummary(res.data));
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

export const getTodaysReportSummary = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/todays-report-summary`)
      .then((res) => {
        dispatch(reportActions.loadTodaysReportSummary(res.data));
        console.log(res.data);
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

export const getCustomerReport = (name) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/${name}`)
      .then((res) => {
        console.log(res.data);
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
