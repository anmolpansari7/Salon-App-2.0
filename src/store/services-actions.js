import axios from "axios";
import { servicesAction } from "./services-slice";
// import { authSliceAction } from "./auth-slice";
// import { toast } from "react-toastify";

// require("dotenv").config();

export const getServicesData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/service`)
      .then((res) => {
        if (res.status === 200) {
          dispatch(servicesAction.loadServices(res.data));
        }
      })
      .catch((error) => {
        // toast.error("Server Disconnected!");
        console.log(error);
      });
  };
};

export const sendServiceData = (gender, category, name, cost) => {
  return (dispatch) => {
    // Send Data to DB
    // const ownerToken = localStorage.getItem("ownerToken");

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/service/add`,
        {
          gender: gender,
          category: category,
          name: name,
          cost: cost,
        }
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        // toast.success("Item Added! 👍");
        console.log("success");
        dispatch(getServicesData());
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

export const deleteServiceData = (id) => {
  // const ownerToken = localStorage.getItem("ownerToken");

  return (dispatch) => {
    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/service/${id}`,
        {
          status: "deleted",
        }
        // {
        //   headers: { Authorization: `Bearer ${ownerToken}` },
        // }
      )
      .then(() => {
        // toast.success("Item Removed! ✌");
        console.log("Item Removed!");
        dispatch(getServicesData());
      })
      .catch((err) => {
        if (err.response) {
          // toast.error("Not Authenticated !");
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
