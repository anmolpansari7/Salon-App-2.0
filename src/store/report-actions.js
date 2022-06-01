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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report`, {
        params: {
          branch: branchFilter,
          staff: staffFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
        headers: { Authorization: `Bearer ${token}` },
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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/report-summary`, {
        params: {
          branch: branchFilter,
          staff: staffFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
        headers: { Authorization: `Bearer ${token}` },
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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/report/todays-report-summary`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(reportActions.loadTodaysReportSummary(res.data));
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
