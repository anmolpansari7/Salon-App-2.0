export const packageIsValid = (newPackage, toast) => {
  if (newPackage.name === "") {
    toast({
      title: "Missing Information",
      description: "Please Enter the package name.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPackage.gender === "") {
    toast({
      title: "Missing Information",
      description: "Please select gender.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPackage.services.length === 0) {
    toast({
      title: "No service selected!",
      description: "You have not selected any service for this package.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPackage.packageAmount <= 0) {
    toast({
      title: "Invalid Package Amount!",
      description: "Please Enter a valid amount for package.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPackage.maxUsage <= 0) {
    toast({
      title: "Invalid MaxUsage",
      description: "Please enter max usage for package.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPackage.validFor === "") {
    toast({
      title: "Missing Information",
      description: "Please select package duration.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  return true;
};

export const validatePackageAssignOrder = (newOrder, toast) => {
  if (newOrder.customerId === "") {
    toast({
      title: "Missing Information",
      description: "Please select package duration.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.paidAmount < 0) {
    toast({
      title: "Negative value Paid!",
      description: "Paid Amound Field can not be negative.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.paymentMode === "") {
    toast({
      title: "Payment mode not selected!",
      description: "Select a payment mode to proceed with current order.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.packageId === "") {
    toast({
      title: "Staff not selected!",
      description: "Select a package to proceed with current order.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.servedBy === "") {
    toast({
      title: "Package not selected!",
      description: "Select a staff who is placing order.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  return true;
};

export const validatePackageUsageOrder = (newOrder, toast) => {
  if (newOrder.customerId === "") {
    toast({
      title: "Missing Information",
      description: "Please select package duration.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.packageId === "") {
    toast({
      title: "Staff not selected!",
      description: "Select a package to proceed with current order.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newOrder.servedBy === "") {
    toast({
      title: "Package not selected!",
      description: "Select a staff who is placing order.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  return true;
};
