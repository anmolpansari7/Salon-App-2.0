import React from "react";

const PrimaryButton = ({ type, content, onClick, className }) => {
  return (
    <button
      type={type}
      className={
        " w-full h-8 bg-nav-active-tab-bg text-white mt-3 rounded-sm " +
        className
      }
      onClick={(e) => {
        onClick(e);
      }}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
