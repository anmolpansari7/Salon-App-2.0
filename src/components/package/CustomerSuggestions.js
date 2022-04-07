import React from "react";
import { useDispatch } from "react-redux";
import { packageActions } from "../../store/package-slice";

const CustomerSuggestions = ({
  selectedPackageId,
  suggestedCustomers,
  className,
  onCustomerSelect,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={className}>
      {suggestedCustomers.map((customer, idx) => {
        let isFound = customer.package.some((pack) => {
          if (pack.packageId === selectedPackageId) {
            return true;
          }
        });

        let cp = isFound ? " cursor-not-allowed" : " cursor-pointer";

        return (
          <div
            key={idx}
            className={
              " flex bg-nav-inactive-tab-bg text-sm justify-between h-9 border border-gray-400 hover:bg-white rounded-md px-5 py-2" +
              cp
            }
            onClick={() => {
              onCustomerSelect(customer);
              dispatch(packageActions.clearSuggestions());
            }}
          >
            <p className=" self-center">{customer.name}</p>
            <p className=" self-center">{customer.contact}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerSuggestions;
