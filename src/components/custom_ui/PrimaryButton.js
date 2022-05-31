import React from "react";

const PrimaryButton = ({ type, content, onClick, className, disabled }) => {
  return (
    <button
      type={type}
      className={
        " w-full h-8 bg-nav-active-tab-bg text-white mt-3 rounded-sm " +
        className
      }
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;
