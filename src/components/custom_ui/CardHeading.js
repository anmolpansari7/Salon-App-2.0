import React from "react";

const CardHeading = (props) => {
  return (
    <h1
      className={props.className + " border-b border-dashed border-black mb-2"}
    >
      {props.children}
    </h1>
  );
};

export default CardHeading;
