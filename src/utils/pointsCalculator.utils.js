export const validatePointsCalculator = (calc, toast) => {
  if (
    calc.forRupee <= 0 ||
    calc.givenPoints <= 0 ||
    calc.forPoints <= 0 ||
    calc.givenDiscount <= 0
  ) {
    toast({
      title: "Invalid Case",
      description: "Zero and negative values not accepted.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  return true;
};
