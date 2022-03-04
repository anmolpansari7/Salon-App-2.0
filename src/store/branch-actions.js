import axios from "axios";
import { branchAction } from "./branch-slice";

export const getBranches = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/branch`)
      .then((res) => {
        dispatch(branchAction.loadBranches(res.data));
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

export const sendNewBranchData = (newBranch, onHideModal, toast) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/branch/add`, {
        name: newBranch.name,
        password: newBranch.password,
      })
      .then((res) => {
        toast({
          title: "Congratulations!",
          description: "New Branch has been added successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getBranches());
        onHideModal();
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

export const deleteBranch = (id) => {
  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/branch/delete/${id}`, {
        status: "deleted",
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getBranches());
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
