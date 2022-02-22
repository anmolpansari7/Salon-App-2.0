import React from "react";

const FilterCard = (props) => {
  return (
    <div
      className={
        props.className +
        " bg-body-card-color p-2 rounded-md border-2 border-card-border"
      }
    >
      {props.children}
    </div>
  );
};

export default FilterCard;
