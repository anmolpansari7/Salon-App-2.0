import axios from "axios";
// import { inventoryItemActions } from "./inventory-item-slice";

export const sendNewInventoryItemData = (newInventoryItem, toast) => {
  return (dispatch) => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/inventory/add`,
        {
          gender: newInventoryItem.gender,
          name: newInventoryItem.name,
          cost: newInventoryItem.cost,
          quantity: newInventoryItem.quantity,
          lastAddedOn: newInventoryItem.lastAddedOn,
          lastSoldOn: newInventoryItem.lastSoldOn,
        }
        // { headers: { Authorization: `Bearer ${ownerToken}` } }
      )
      .then(() => {
        toast({
          title: "Item Added !",
          description: "This Item has been added to the inventory.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        console.log("Item Added !");
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
