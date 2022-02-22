import React from "react";
import FilterCard from "../container/FilterCard";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

const ReportFilters = () => {
  return (
    <div className="w-full flex mb-3 text-sm">
      <FilterCard className="flex justify-between w-9/12">
        {/* <div className="self-center flex w-4/12 mr-2 justify-around">
        </div> */}
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

        <div className=" self-center flex w-8/12 justify-between">
          <span className=" self-center ml-4 mr-2">From</span>
          <Input
            type="date"
            id="v-from"
            placeholder=""
            label="From:"
            size={"sm"}
            alignSelf={"center"}
          />
          <span className=" self-center mx-1"> To </span>
          <Input
            type="date"
            id="v-to"
            placeholder=""
            label="To:"
            size={"sm"}
            alignSelf={"center"}
          />
        </div>
        <button className="ml-4"> clear </button>
      </FilterCard>
      <FilterCard className="w-3/12 flex ml-3">
        <Input type="text" placeholder="Search" size={"sm"} border={"none"} />
      </FilterCard>
    </div>
  );
};

export default ReportFilters;
