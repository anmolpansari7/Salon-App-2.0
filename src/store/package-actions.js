import axios from "axios";
import { packageActions } from "./package-slice";
// import { authSliceAction } from "./auth-slice";
// import { customerListActions } from "./customers-slice";
// import { currentCustomerActions } from "./current-customer-slice";
// require("dotenv").config();

export const sendNewPackageData = (newPackage, toast) => {
  return (dispatch) => {
    // const ownerToken = localStorage.getItem("ownerToken");
    console.log(newPackage);

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/package/create`,
        {
          gender: newPackage.gender,
          name: newPackage.name,
          services: newPackage.services,
          totalAmount: newPackage.totalAmount,
          packageAmount: newPackage.packageAmount,
          maxUsage: newPackage.maxUsage,
          validFrom: newPackage.validFrom,
          validTill: newPackage.validTill,
        }
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then((res) => {
        toast({
          title: "New Package Created.",
          description: "Now you can send this package to any customer.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log("Package Added !");
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

export const getPreviousPackageData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/package`)
      .then((res) => {
        dispatch(packageActions.loadPreviousPackages(res.data));
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
