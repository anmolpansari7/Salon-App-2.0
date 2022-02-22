import React from "react";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";

const CurrentBranchesList = () => {
  return (
    <ul className=" flex flex-col space-y-3 max-h-44 overflow-auto last: mb-7">
      <ListItemDBtn
        content="Rajnandgaon"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Bhilai"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Raipur"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Durg"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
    </ul>
  );
};

export default CurrentBranchesList;
