import React from "react";

const FloatingButton = ({ className, content, onClick, disabled }) => {
  return (
    <button
      className={
        " fixed bottom-8 right-10 bg-nav-active-tab-bg text-white px-5 py-2 rounded-md shadow-lg text-sm" +
        className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default FloatingButton;
