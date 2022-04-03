export const validateService = (name, cost, toast) => {
  if (name === "") {
    toast({
      title: "Field Empty !",
      description: "Empty values not allowed!",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  if (cost <= 0) {
    toast({
      title: "Invalid Cost!",
      description: "Cost can not be negative or zero.",
      status: "error",
      duration: 3000,
      isClosable: true,
    });
    return false;
  }

  return true;
};
