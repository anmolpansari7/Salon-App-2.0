import React from "react";

const Suggestions = ({ customer }) => {
  return (
    <li className="h-12 w-full px-2 flex justify-between border-b-2 border-gray-400 hover:bg-white bg-nav-inactive-tab-bg rounded-md">
      <p className="self-center w-2/5 truncate ">{customer.name}</p>
      <p className="self-center w-3/5 flex-1">+91 {customer.contact}</p>
    </li>
  );
};

export default Suggestions;
