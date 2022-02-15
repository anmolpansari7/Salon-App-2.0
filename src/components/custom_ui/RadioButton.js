import React from "react";

const RadioButton = ({ name, id, val, label }) => {
  return (
    <div className="cursor-pointer group w-fit">
      <input
        type="radio"
        name={name}
        id={id}
        val={val}
        className="self-center accent-black group-hover:cursor-pointer"
        required
      />
      <label htmlFor={id} className="ml-2 group-hover:cursor-pointer text-base">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
