import axios from "axios";
import { packageActions } from "./package-slice";

export const sendNewPackageData = (newPackage, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

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
          status: "active",
        },
        { headers: { Authorization: `Bearer ${token}` } }
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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/package`, {
        params: {
          startDate: startDateFilter,
          endDate: endDateFilter,
          name: name,
        },
        headers: { Authorization: `Bearer ${token}` },
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
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/package/active-package-list`, {
        headers: { Authorization: `Bearer ${token}` },
      })
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

export const assignPackage = (customerId, pack, toast) => {
  const packageId = pack._id;
  const maxUsage = pack.maxUsage;
  let validTill = getValidity(pack.validFor);

  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/package/assign-package`,
        {
          customerId,
          packageId,
          maxUsage,
          validTill,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
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

export const deletePackage = (packageId, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/package/${packageId}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast({
          title: "Package Deleted !",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getPreviousPackageData());
        dispatch(getAllActivePackages());
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
