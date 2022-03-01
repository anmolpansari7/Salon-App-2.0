import React from "react";

const Suggestions = ({ customer }) => {
  // const dispatch = useDispatch();
  const onSuggestionClick = () => {
    //   dispatch(currentCustomerActions.clearCurrCustomerOrders());
    //   dispatch(currentCustomerActions.setPageNumberOne());
  };

  return (
    <li
      className="h-12 w-full px-6 flex justify-between border-b-2 border-gray-400 hover:bg-white bg-nav-inactive-tab-bg rounded-md"
      onClick={onSuggestionClick}
    >
      <p className="self-center">{customer.name}</p>
      <p className="self-center">+91 {customer.contact}</p>
    </li>
  );
};

export default Suggestions;
