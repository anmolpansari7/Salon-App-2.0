import React from "react";
import FilterCard from "../container/FilterCard";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const CurrentCustomerOrderFilter = () => {
  return (
    <FilterCard className="flex justify-between text-sm">
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

      <div className=" self-center flex w-10/12 justify-between">
        <span className=" self-center ml-4 mr-2">From</span>
        <Input
          type="date"
          id="v-from"
          placeholder=""
          label="From:"
          size={"sm"}
          alignSelf={"center"}
        />
        <span className=" self-center mx-4"> To </span>
        <Input
          type="date"
          id="v-to"
          placeholder=""
          label="To:"
          size={"sm"}
          alignSelf={"center"}
        />
      </div>
      <button className=" ml-8"> clear </button>
    </FilterCard>
  );
};

export default CurrentCustomerOrderFilter;
