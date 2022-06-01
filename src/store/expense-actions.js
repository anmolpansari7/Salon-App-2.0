import axios from "axios";
import { expenseActions } from "./expense-slice";

export const getExpenseCategories = () => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/expense/categories`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(expenseActions.loadExpenseCategories(res.data));
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

export const sendNewExpenseCategories = (newExpenseCategory, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/expense/add-expense-category`,
        {
          name: newExpenseCategory,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast({
          title: "Added !",
          description: "New expense category has been added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getExpenseCategories());
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

export const deleteExpenseCategory = (id, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .patch(
        `${process.env.REACT_APP_BASE_URL}/expense/delete-expense-category/${id}`,
        {
          status: "deleted",
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast({
          title: "Removed !",
          description: "Category has been removed successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getExpenseCategories());
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

export const sendNewExpenseData = (newExpense, toast) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/expense/add`,
        {
          branch: newExpense.branch,
          category: newExpense.category,
          amount: newExpense.amount,
          remark: newExpense.remark,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        toast({
          title: "Added !",
          description: "New expense has been added successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        dispatch(getExpenseDetails());
        dispatch(getExpenseSummary("", "", ""));
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

// get all expenses
export const getExpenses = () => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(`${process.env.REACT_APP_BASE_URL}/expense`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        dispatch(expenseActions.loadPreviousExpenses(res.data));
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

export const getExpenseSummary = (
  branchFilter,
  startDateFilter,
  endDateFilter
) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(
        //summary?branch=b&startdate=date1&enddate=date2
        `${process.env.REACT_APP_BASE_URL}/expense/summary`,
        {
          params: {
            branch: branchFilter,
            startdate: startDateFilter,
            enddate: endDateFilter,
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        dispatch(expenseActions.loadExpenseSummary(res.data));
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

export const getExpenseDetails = (
  branchFilter,
  startDateFilter,
  endDateFilter
) => {
  return (dispatch) => {
    let token = localStorage.getItem("ownerToken");
    if (token === null) {
      token = localStorage.getItem("branchToken");
    }

    axios
      .get(
        //summary?branch=b&startdate=date1&enddate=date2
        `${process.env.REACT_APP_BASE_URL}/expense/details`,
        {
          params: {
            branch: branchFilter,
            startdate: startDateFilter,
            enddate: endDateFilter,
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        dispatch(expenseActions.loadPreviousExpenses(res.data));
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
