export const validatePromoCode = (newPromoCode, toast) => {
  if (newPromoCode.promoCode === "") {
    toast({
      title: "Missing Information",
      description: "Promo Code field can not be empty.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (newPromoCode.validFrom === "") {
    toast({
      title: "Missing Information",
      description: "Enter Valid From Date.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newPromoCode.validTill === "") {
    toast({
      title: "Missing Information",
      description: "Enter Valid Till Date.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newPromoCode.validFrom > newPromoCode.validTill) {
    toast({
      title: "Invalid Case",
      description: "Valid From date can not exceed Valid Till date.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newPromoCode.discountType === "") {
    toast({
      title: "Missing Information!",
      description: "Discount Type not selected !",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (newPromoCode.discountValue < 0) {
    toast({
      title: "Invalid Case",
      description: "Discount value can not be negative.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  if (
    newPromoCode.discountType === "percentage" &&
    newPromoCode.discountValue > 100
  ) {
    toast({
      title: "Invalid Case",
      description: "Percentage Discount value can not be greater than 100.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });

    return false;
  }

  return true;
};
