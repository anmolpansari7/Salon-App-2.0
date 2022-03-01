import React from "react";
import { Select } from "@chakra-ui/react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import crossIcon from "./../../assets/cross_icon.svg";

const SelectService = () => {
  return (
    <div>
      <Select
        placeholder="Select option"
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <div className=" h-52 max-h-52  overflow-auto flex flex-col space-y-2 mt-3">
        <ListItemDBtn
          content={"Haircut + Beard"}
          content2={""}
          showBtn={true}
          imageSrc={crossIcon}
          className={"text-sm"}
        />
        <ListItemDBtn
          content={"Haircut + Beard"}
          content2={""}
          showBtn={true}
          imageSrc={crossIcon}
          className={"text-sm"}
        />
      </div>
    </div>
  );
};

export default SelectService;
