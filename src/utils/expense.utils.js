export const validateExpense = (newExpense, toast) => {
  if (newExpense.branch === "") {
    toast({
      title: "Branch not selected!",
      description: "Please select a branch.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newExpense.category === "") {
    toast({
      title: "Category not selected!",
      description: "Please select expense category.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newExpense.amount <= 0) {
    toast({
      title: "Invalid Input",
      description: "Expense amount can not be zero or negative.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  return true;
};
