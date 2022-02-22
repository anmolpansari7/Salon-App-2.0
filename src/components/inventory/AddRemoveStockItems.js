import { Input } from "@chakra-ui/react";
import React from "react";

const AddRemoveStockItems = () => {
  return (
    <form>
      <Input
        type={"text"}
        width={"5rem"}
        size={"v-sm"}
        border={"1px solid"}
        borderColor={"lightblue"}
        rounded={"5px"}
      />
      <button className=" bg-slate-300 px-3">+</button>
      <button className=" bg-slate-300 px-3 border-l border-white">-</button>
    </form>
  );
};

export default AddRemoveStockItems;
