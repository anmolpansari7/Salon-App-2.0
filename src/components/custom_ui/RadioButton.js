import React from "react";

const RadioButton = ({ name, id, val, label, onChange, checked }) => {
  return (
    <div className="cursor-pointer group w-fit">
      <input
        type="radio"
        name={name}
        id={id}
        value={val}
        className="self-center accent-black group-hover:cursor-pointer"
        onChange={(e) => {
          onChange(e);
        }}
        checked={checked}
        required
      />
      <label htmlFor={id} className="ml-2 group-hover:cursor-pointer text-sm">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
