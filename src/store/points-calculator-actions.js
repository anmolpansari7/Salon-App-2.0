import axios from "axios";
import { pointCalculatorActions } from "./points-calculator-slice";

export const getPointsCalculatorData = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/points-calculator`)
      .then((res) => {
        dispatch(pointCalculatorActions.loadForRupee(res.data.forRupee));
        dispatch(pointCalculatorActions.loadGivenPoints(res.data.givenPoints));
        dispatch(pointCalculatorActions.loadForPoints(res.data.forPoints));
        dispatch(
          pointCalculatorActions.loadGivenDiscount(res.data.givenDiscount)
        );
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

// export const sendPointsCalculatorData = (
//   forRupee,
//   givenPoints,
//   forPoints,
//   givenDiscount,
//   toast
// ) => {
//   return (dispatch) => {
//     axios
//       .post(`${process.env.REACT_APP_BASE_URL}/points-calculator`, {
//         forRupee: forRupee,
//         givenPoints: givenPoints,
//         forPoints: forPoints,
//         givenDiscount: givenDiscount,
//       })
//       .then(() => {
//         toast({
//           title: "Points Calculator Updated !",
//           description: "Points calculator has been updated successfully",
//           status: "success",
//           duration: 3000,
//           isClosable: true,
//         });
//       })
//       .catch((err) => {
//         if (err.response) {
//           //   toast.error("Not Authenticated !");
//           //   localStorage.removeItem("ownerToken");
//           //   dispatch(authSliceAction.setIsAuthFalse());
//           console.log(err);
//         } else {
//           //   toast.error("Server Disconnected!");
//           console.log(err);
//         }
//       });
//   };
// };

export const updatePointsCalculatorData = (
  forRupee,
  givenPoints,
  forPoints,
  givenDiscount,
  toast
) => {
  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/points-calculator`, {
        forRupee: forRupee,
        givenPoints: givenPoints,
        forPoints: forPoints,
        givenDiscount: givenDiscount,
      })
      .then(() => {
        dispatch(getPointsCalculatorData());
        toast({
          title: "Points Calculator Updated !",
          description: "Points calculator has been updated successfully",
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
