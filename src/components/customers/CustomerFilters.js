import React from "react";
import RadioButton from "../custom_ui/RadioButton";
import { Input } from "@chakra-ui/react";
import FilterCard from "../container/FilterCard";

const CustomerFilters = () => {
  return (
    <div className="w-full flex mb-3 text-sm">
      <FilterCard className="flex justify-between w-9/12">
        <div className="self-center flex w-4/12 mr-2 justify-around">
          <RadioButton
            name="filter1"
            id="visited-customers"
            val="visited"
            label="Visited"
          />
          <RadioButton
            name="filter1"
            id="non-visited-customers"
            val="non-visited"
            label="Non-visited"
          />
        </div>
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
        <Input
          type="text"
          placeholder="Search"
          border={"none"}
          size={"sm"}
          fontSize={"0.875rem"}
        />
      </FilterCard>
    </div>
  );
};

export default CustomerFilters;
