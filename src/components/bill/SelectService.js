import React, { useState } from "react";
import { Select } from "@chakra-ui/react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import crossIcon from "./../../assets/cross_icon.svg";
import { v4 as uuidv4 } from "uuid";

const SelectService = ({
  listItems,
  placeholder,
  selectedItems,
  setSelectedItems,
  setPromo,
  setDiscountFromPromoCode,
}) => {
  const onItemSelection = (e) => {
    const selectedItemId = e.target.value;
    if (selectedItemId === "") return;
    let selectedItem = listItems.find((item) => item._id === selectedItemId);
    selectedItem = {
      ...selectedItem,
      idx: uuidv4(),
    };
    setSelectedItems([...selectedItems, selectedItem]);
    setPromo("");
    setDiscountFromPromoCode("");
    e.target.value = "";
  };

  const onItemDelete = (idx) => {
    let currList = selectedItems.filter((item) => item.idx !== idx);
    setSelectedItems(currList);
    setPromo("");
    setDiscountFromPromoCode("");
  };

  return (
    <div>
      <Select
        placeholder={placeholder}
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
        onChange={onItemSelection}
      >
        {listItems.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </Select>
      <div className=" h-40 overflow-auto flex flex-col space-y-2 mt-3 bg-slate-200 rounded-md p-5">
        {selectedItems.length === 0 ? (
          <p className=" text-center text-sm m-auto text-gray-400">
            No Item Selected.
          </p>
        ) : (
          selectedItems.map((item) => (
            <ListItemDBtn
              key={item.idx}
              id={item.idx}
              content={item.name}
              content2={""}
              showBtn={true}
              imageSrc={crossIcon}
              className={"text-sm"}
              onItemDelete={onItemDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SelectService;
