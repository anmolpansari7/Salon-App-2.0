export const validateNewOrder = (newOrder, toast) => {
  if (
    newOrder.serviceIds.length === 0 &&
    newOrder.inventoryItemIds.length === 0
  ) {
    toast({
      title: "Can not place empty order!",
      description: "No service or item selected.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newOrder.paidAmount < 0) {
    toast({
      title: "Negative Paid Amount!",
      description: "Enter a valid Paid Amount greater than zero.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newOrder.paymentMode === "") {
    toast({
      title: "Payment Mode is not selected!",
      description: "Select Payment mode to proceed.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newOrder.pointsUsed < 0) {
    toast({
      title: "Negative value in points used!",
      description: "Enter a valid value greater than zero.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newOrder.servedBy === "") {
    toast({
      title: "Staff not selected !",
      description: "",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  return true;
};
