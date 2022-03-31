import axios from "axios";
import { packageActions } from "./package-slice";
// import { authSliceAction } from "./auth-slice";
// import { customerListActions } from "./customers-slice";
// import { currentCustomerActions } from "./current-customer-slice";
// require("dotenv").config();

export const sendNewPackageData = (newPackage, toast) => {
  return (dispatch) => {
    // const ownerToken = localStorage.getItem("ownerToken");
    // console.log(newPackage);

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
          validFor: newPackage.validFor,
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
        dispatch(getPreviousPackageData());
        dispatch(getAllActivePackages());
        // console.log("Package Added !");
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

export const getPreviousPackageData = (
  startDateFilter,
  endDateFilter,
  name
) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/package`, {
        params: {
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: name,
        },
      })
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

export const getAllActivePackages = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/package/active-package-list`)
      .then((res) => {
        dispatch(packageActions.loadAllActivePackages(res.data));
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

const getValidity = (validFor) => {
  let days = 0;
  switch (validFor) {
    case "3M":
      days = 90;
      break;
    case "6M":
      days = 180;
      break;
    case "9M":
      days = 270;
      break;
    case "1Y":
      days = 365;
      break;
    case "2Y":
      days = 730;
      break;
    case "3Y":
      days = 1095;
      break;
    case "5Y":
      days = 1825;
      break;
    default:
      days = 0;
  }

  let newDate = new Date();
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

export const assignPackage = (customers, pack, toast) => {
  const customerIds = customers.map((customer) => customer._id);
  const packageId = pack._id;
  const maxUsage = pack.maxUsage;
  console.log(pack.validFor);
  let validTill = getValidity(pack.validFor);

  console.log(validTill);

  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/package/assign-package`, {
        customerIds,
        packageId,
        maxUsage,
        validTill,
      })
      .then((res) => {
        console.log("Package Assigned ! ");
        toast({
          title: "Package Assigned !",
          description: "Package has been assigned to the selected customers.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
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
