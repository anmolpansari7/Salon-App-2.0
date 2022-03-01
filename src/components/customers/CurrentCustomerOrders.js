import React from "react";
import CurrentCustomerOrderFilter from "./CurrentCustomerOrderFilter";
import PreviousVisits from "./PreviousVisits";

const CurrentCustomerOrders = () => {
  return (
    <div className="w-4/5 flex flex-col">
      <CurrentCustomerOrderFilter />
      <PreviousVisits />
    </div>
  );
};

export default CurrentCustomerOrders;
