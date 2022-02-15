import React from "react";
import deleteBtnImage from "./../../assets/delete_btn.svg";

const ListItemDBtn = ({ content, content2 }) => {
  return (
    <li className=" flex justify-between border-b border-dashed border-black text-base">
      <div className=" flex justify-between flex-1">
        <p>{content}</p>
        <p>{content2}</p>
      </div>
      <button>
        <img
          className=" h-5 self-center ml-5"
          src={deleteBtnImage}
          alt="delete"
        />
      </button>
    </li>
  );
};

export default ListItemDBtn;
