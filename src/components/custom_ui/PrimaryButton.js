import React from "react";

const PrimaryButton = ({ content }) => {
  return (
    <button className=" w-full h-8 bg-nav-active-tab-bg text-white mt-3 rounded-sm">
      {content}
    </button>
  );
};

export default PrimaryButton;
