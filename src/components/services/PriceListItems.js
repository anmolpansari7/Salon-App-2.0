import React from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";

const PriceListItems = () => {
  return (
    <ul className=" flex flex-col flex-1 space-y-4 overflow-auto">
      <ListItemDBtn
        content="Regular Haircut"
        content2="200 Rs."
        className="text-base"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Regular Haircut"
        content2="200 Rs."
        className="text-base"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Regular Haircut"
        content2="200 Rs."
        className="text-base"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
      <ListItemDBtn
        content="Regular Haircut"
        content2="200 Rs."
        className="text-base"
        imageSrc={deleteBtn}
        showBtn={true}
        buttonImgClass={"h-4"}
      />
    </ul>
  );
};

export default PriceListItems;
