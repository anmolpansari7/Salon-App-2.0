import React from "react";
import CurrentCustomerOrderFilter from "./CurrentCustomerOrderFilter";
import PreviousVisits from "./PreviousVisits";

const CurrentCustomerOrders = ({
  staffFilter,
  setStaffFilter,
  startDateFilter,
  setStartDateFilter,
  endDateFilter,
  setEndDateFilter,
}) => {
  return (
    <div className="w-4/5 flex flex-col">
      <CurrentCustomerOrderFilter
        staffFilter={staffFilter}
        setStaffFilter={setStaffFilter}
        startDateFilter={startDateFilter}
        setStartDateFilter={setStartDateFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
      />
      <PreviousVisits />
    </div>
  );
};

export default CurrentCustomerOrders;
