import axios from "axios";
import {
  getCurrentCustomerData,
  getCurrentCustomerOrders,
} from "./current-customer-actions";

export const sendNewOrderData = (newOrder, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/order`,
        {
          type: newOrder.type,
          branchId: newOrder.branchId,
          customerId: newOrder.customerId,
          serviceIds: newOrder.serviceIds,
          inventoryItemIds: newOrder.inventoryItemIds,
          totalAmount: newOrder.totalAmount,
          paidAmount: newOrder.paidAmount,
          paymentMode: newOrder.paymentMode,
          remark: newOrder.remark,
          pointsUsed: newOrder.pointsUsed,
          pointsEarned: newOrder.pointsEarned,
          discountGiven: newOrder.discountGiven,
          promoCode: newOrder.promoCode,
          packageId: newOrder.packageId,
          servedBy: newOrder.servedBy,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        toast({
          title: "Order Placed!",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        dispatch(getCurrentCustomerOrders(newOrder.customerId));
        if (newOrder.type === "package-usage") {
          dispatch(getCurrentCustomerData(newOrder.customerId));
        }
        console.log("Order Placed !");
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
