import React from "react";
import { useDispatch } from "react-redux";
import { packageActions } from "../../store/package-slice";

const CustomerSuggestions = ({
  suggestedCustomers,
  className,
  onCustomerSelect,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={className}>
      {suggestedCustomers.map((customer) => (
        <div
          className=" flex bg-nav-inactive-tab-bg text-sm justify-between h-9 border border-gray-400 hover:bg-white cursor-pointer rounded-md px-5 py-2"
          onClick={() => {
            onCustomerSelect(customer);
            dispatch(packageActions.clearSuggestions());
          }}
        >
          <p className=" self-center">{customer.name}</p>
          <p className=" self-center">{customer.contact}</p>
        </div>
      ))}
    </div>
  );
};

export default CustomerSuggestions;
