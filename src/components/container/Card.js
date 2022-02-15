import React from "react";

const Card = (props) => {
  return (
    <div
      className={
        props.styles +
        " bg-body-card-color p-5 rounded-md border-2 border-card-border"
      }
    >
      {props.children}
    </div>
  );
};

export default Card;
