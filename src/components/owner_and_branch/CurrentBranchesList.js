import React from "react";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";

const CurrentBranchesList = () => {
  return (
    <ul className=" flex flex-col space-y-3 max-h-44 overflow-auto last: mb-7">
      <ListItemDBtn content="Rajnandgaon" />
      <ListItemDBtn content="Bhilai" />
      <ListItemDBtn content="Raipur" />
      <ListItemDBtn content="Durg" />
    </ul>
  );
};

export default CurrentBranchesList;
