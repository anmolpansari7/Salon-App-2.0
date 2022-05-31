import React from "react";

const Input = ({ type, id, placeholder, label, onChange, value }) => {
  return (
    <div className=" border-black border-dashed border-b mb-3 flex justify-between">
      <label htmlFor="" className=" mr-2 self-end">
        {label}
      </label>
      <input
        type={type}
        id={id}
        className=" focus:outline-none px-3 text-base bg-slate-100 rounded-sm"
        placeholder={placeholder}
        onChange={(e) => {
          onChange(e);
        }}
        value={value}
      />
    </div>
  );
};

export default Input;
