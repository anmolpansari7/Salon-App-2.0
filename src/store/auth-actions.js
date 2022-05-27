import axios from "axios";
import { authSliceAction } from "./auth-slice";

export const authenticateRequest = (
  selectedBranch,
  password,
  navigate,
  toast
) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/authentication/login`, {
        selectedBranch: selectedBranch,
        password: password,
      })
      .then((res) => {
        if (res.data.token !== undefined) {
          if (selectedBranch === "owner") {
            localStorage.setItem("ownerToken", res.data.token);
            dispatch(authSliceAction.setIsAuthOwnerTrue());
            toast({
              title: "Welcome Owner!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          } else {
            localStorage.setItem("branchToken", res.data.token);
            localStorage.setItem("branchId", selectedBranch);
            dispatch(authSliceAction.setIsAuthBranchTrue());
            dispatch(authSliceAction.setBranchId(selectedBranch));
            toast({
              title: "Welcome Staff Member!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
          }
          navigate("/price");
        } else {
          toast({
            title: "Wrong Password!",
            description: "Please enter a valid password.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((error) => {
        toast({
          title: "Something went wrong!",
          description: `${error}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };
};

export const requestPasswordChangeForOwner = (
  newPassword,
  currentPassword,
  navigate,
  toast
) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/authentication/change-owner-password`,
        {
          newPassword: newPassword,
          currentPassword: currentPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        localStorage.removeItem("ownerToken");
        dispatch(authSliceAction.setIsAuthOwnerFalse());
        toast({
          title: "Password Changed!",
          description: "Please Login with new password.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Incorrect Owner Password!",
            description: "Please enter the correct owner password.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };
};

export const requestPasswordChangeForBranch = (
  newPassword,
  currentPassword,
  branchId,
  toast
) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/authentication/change-branch-password`,
        {
          newPassword: newPassword,
          currentPassword: currentPassword,
          branchId: branchId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        localStorage.removeItem("ownerToken");
        toast({
          title: "Password Changed!",
          description: "Selected Branch's Password Updated!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        if (err.response) {
          toast({
            title: "Incorrect Owner Password!",
            description: "Please enter the correct owner password.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };
};
