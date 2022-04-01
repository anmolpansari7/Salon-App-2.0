import axios from "axios";
import { staffSliceActions } from "./staff-slice";

export const getStaffList = (
  genderFilter,
  startDateFilter,
  endDateFilter,
  nameFilter
) => {
  return (dispatch) => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/staff`,
        {
          params: {
            gender: genderFilter,
            startDate: startDateFilter,
            endDate: endDateFilter,
            name: nameFilter,
          },
        }
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        dispatch(staffSliceActions.loadStaff(res.data));
      })
      .catch((error) => {
        // toast.error("Server Disconnected!");
        console.log(error);
      });
  };
};

export const sendNewStaffData = (newStaff, toast) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/staff`, {
        gender: newStaff.gender,
        name: newStaff.name,
        contact: newStaff.contact,
        dob: newStaff.dob,
        address: newStaff.address,
        due: 0,
        aadhar: newStaff.aadharDetails,
      })
      .then(() => {
        toast({
          title: "Staff Added.",
          description: "You have added a new staff member.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getStaffList());
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
