import React from "react";

const PrimaryButton = ({ type, content, onClick }) => {
  return (
    <button
      type={type}
      className=" w-full h-8 bg-nav-active-tab-bg text-white mt-3 rounded-sm"
      onClick={(e) => {
        onClick(e);
      }}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
