import axios from "axios";
import { branchAction } from "./branch-slice";

export const getBranches = () => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/branch`, {
        headers: { Authorization: `Bearer ${token}` },
      })
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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/branch/add`,
        {
          name: newBranch.name,
          password: newBranch.password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
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

export const deleteBranch = (id, branches, toast) => {
  let branch = branches.find((branch) => branch._id === id);
  let branchId = prompt(
    `Please enter "${id}" in the field to delete ${branch.name} Branch Permanently.`,
    ""
  );
  if (branchId !== id) {
    toast({
      title: "Field mismatched!",
      description: "Delete Request Denied !",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return;
  }

  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/branch/delete/${id}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast({
          title: "Branch Deleted!",
          description: "Request for branch deletion finished successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
