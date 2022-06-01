import axios from "axios";
import { inventoryItemActions } from "./inventory-item-slice";

export const getInventoryItems = () => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/inventory`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) =>
        dispatch(inventoryItemActions.loadInventoryItems(res.data))
      )
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

export const sendNewInventoryItemData = (newInventoryItem, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/inventory/add`,
        {
          gender: newInventoryItem.gender,
          name: newInventoryItem.name,
          cost: newInventoryItem.cost,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        toast({
          title: "Item Added !",
          description: "This Item has been added to the inventory.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getInventoryItems());
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

export const updateInventoryItem = (id, gender, name, cost, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/inventory/update/${id}`,
        {
          gender,
          name,
          cost,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast({
          title: "Item Updated !",
          description: "Item Details have been updated successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getInventoryItems());
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

export const deleteInventoryItem = (itemId, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/inventory/delete/${itemId}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast({
          title: "Item Deleted",
          description: "Item Has been deleted Successfully",
          status: "success",
          isClosable: true,
        });
        dispatch(getInventoryItems());
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

export const addItemToBranch = (itemId, branchId, quantity, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/inventory/distributions`,
        {
          itemId,
          branchId,
          quantity,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(() => {
        toast({
          title: "Stock Updated !",
          description: "Item has been added to the stock.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getInventoryItems());
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
