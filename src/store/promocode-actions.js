import axios from "axios";
import { promoCodeActions } from "./promocode-slice";

export const sendNewPromoCodeData = (newPromoCode, toast) => {
  return (dispatch) => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/promocode/create`, {
        promoCode: newPromoCode.promoCode,
        validFrom: newPromoCode.validFrom,
        validTill: newPromoCode.validTill,
        discountType: newPromoCode.discountType,
        discountValue: newPromoCode.discountValue,
      })
      .then((res) => {
        toast({
          title: "New PromoCode Created.",
          description: "Now you can send this promo code to any customer.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getPreviousPromocodes("", "", ""));
        dispatch(getAllActivePromocodes());
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

export const getPreviousPromocodes = (
  statusFilter,
  startDateFilter,
  endDateFilter
) => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/promocode`, {
        params: {
          status: statusFilter,
          startDate: startDateFilter,
          endDate: endDateFilter,
        },
      })
      .then((res) => {
        dispatch(promoCodeActions.loadPreviousPromoCodes(res.data));
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

export const getAllActivePromocodes = () => {
  return (dispatch) => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/promocode/active-promocode-list`)
      .then((res) => {
        dispatch(promoCodeActions.loadAllActivePromoCodes(res.data));
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

export const updateStatus = (id, status) => {
  return (dispatch) => {
    axios
      .patch(`${process.env.REACT_APP_BASE_URL}/promocode/${id}`, {
        status: status,
      })
      .then((res) => {
        // dispatch(promoCodeActions.loadAllActivePromoCodes(res.data));
        console.log(res.data);
        dispatch(getPreviousPromocodes("", "", ""));
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
