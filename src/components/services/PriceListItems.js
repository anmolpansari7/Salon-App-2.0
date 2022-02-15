import React from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";

const PriceListItems = () => {
  return (
    <ul className=" flex flex-col flex-1 space-y-4 overflow-auto">
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
      <ListItemDBtn content="Regular Haircut" content2="200 Rs." />
    </ul>
  );
};

export default PriceListItems;
