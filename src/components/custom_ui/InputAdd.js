import React from "react";
import PencilImg from "./../../assets/pencilImg.svg";

const InputAdd = ({ type, placeholder }) => {
  return (
    <div className=" flex justify-between border-b border-dashed border-black">
      <input
        type={type}
        className="focus:outline-none text-base placeholder:text-base flex-1"
        placeholder={placeholder}
      />
      <img src={PencilImg} alt="edit" />
    </div>
  );
};

export default InputAdd;
