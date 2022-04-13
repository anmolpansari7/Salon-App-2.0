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
          console.log(res.data);
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
