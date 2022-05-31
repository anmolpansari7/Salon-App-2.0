export const validatePointsCalculator = (calc, toast) => {
  if (
    calc.forRupeeMale <= 0 ||
    calc.givenPointsMale <= 0 ||
    calc.forPointsMale <= 0 ||
    calc.givenDiscountMale <= 0 ||
    calc.forRupeeFemale <= 0 ||
    calc.givenPointsFemale <= 0 ||
    calc.forPointsFemale <= 0 ||
    calc.givenDiscountFemale <= 0
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
