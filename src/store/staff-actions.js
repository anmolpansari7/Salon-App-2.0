import axios from "axios";
import { staffSliceActions } from "./staff-slice";

export const getStaffList = (
  genderFilter,
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
      .get(`${process.env.REACT_APP_BASE_URL}/staff`, {
        params: {
          gender: genderFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: nameFilter,
        },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(staffSliceActions.loadStaff(res.data));
      })
      .catch((error) => {
        // toast.error("Server Disconnected!");
        console.log(error);
      });
  };
};

export const postImage = async (formData) => {
  const result = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/staff/images`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return result.data;
};

export const sendNewStaffData = (newStaff, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/staff`,
        {
          gender: newStaff.gender,
          name: newStaff.name,
          contact: newStaff.contact,
          dob: newStaff.dob,
          address: newStaff.address,
          due: 0,
          aadhar: newStaff.fileName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        toast({
          title: "Staff Added.",
          description: "You have added a new staff member.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getStaffList("", "", "", ""));
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

export const getAadharPreview = (imageId, setFile) => {
  return (dispatch) => {
    // axios
    //   .get(`${process.env.REACT_APP_BASE_URL}/staff/images/${imageId}`)
    //   .then((res) => {
    //     console.log(res);
    //     setFile(res.data);
    //   })
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/staff/images/${imageId}`,
      responseType: "blob",
    })
      .then((res) => {
        console.log(res);
        const new_blob = new Blob([res.data], { type: "image/png" });
        const url = URL.createObjectURL(new_blob);
        setFile(url);
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
