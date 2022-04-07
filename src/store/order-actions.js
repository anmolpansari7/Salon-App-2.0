import axios from "axios";

export const sendNewOrderData = (newOrder, toast) => {
  axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/order`,
      {
        type: newOrder.type,
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
      }
      // { headers: { Authorization: `Bearer ${ownerToken}` } }
    )
    .then((res) => {
      toast({
        title: "Order Placed!",
        description: "",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

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
