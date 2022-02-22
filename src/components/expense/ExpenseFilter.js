import { Input, Select } from "@chakra-ui/react";
import React from "react";
import FilterCard from "./../container/FilterCard";

const ExpenseFilter = () => {
  return (
    <FilterCard className="flex text-sm justify-between">
      <Select
        placeholder="Select Branch"
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
        width={"12rem"}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <p className=" self-center">Expense From -</p>
      <Input type="date" size="sm" width={"9.5rem"} />
      <p className=" self-center">to</p>
      <Input type="date" size="sm" width={"9.5rem"} />
      <button>clear</button>
    </FilterCard>
  );
};

export default ExpenseFilter;
