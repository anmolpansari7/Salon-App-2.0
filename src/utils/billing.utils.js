export const getTotal = (selectedServices, selectedInventoryItems) => {
  let totalServiceAmount = selectedServices.reduce(
    (total, item) => item.cost + total,
    0
  );

  let totalInventoryAmount = selectedInventoryItems.reduce(
    (total, item) => item.cost + total,
    0
  );

  const totalAmount = totalServiceAmount + totalInventoryAmount;
  return totalAmount;
};
