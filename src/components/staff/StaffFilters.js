import { Input } from "@chakra-ui/react";
import React from "react";
import FilterCard from "../container/FilterCard";
import RadioButton from "./../custom_ui/RadioButton";

const StaffFilters = ({
  genderFilter,
  nameFilter,
  startDateFilter,
  endDateFilter,
  setGenderFilter,
  setNameFilter,
  setStartDateFilter,
  setEndDateFilter,
}) => {
  const clearFilters = () => {
    setNameFilter("");
    setGenderFilter("");
    setStartDateFilter("");
    setEndDateFilter("");
  };

  return (
    <div className="w-full flex mb-3 text-sm">
      <FilterCard className="flex justify-between w-9/12">
        <div className="self-center flex w-4/12 mr-2 justify-around">
          <RadioButton
            name="staff-gender"
            id="male-staff"
            val="M"
            label="Male"
            onChange={(e) => {
              setGenderFilter(e.target.value);
            }}
            checked={genderFilter === "M"}
          />
          <RadioButton
            name="staff-gender"
            id="female-staff"
            val="F"
            label="Female"
            onChange={(e) => {
              setGenderFilter(e.target.value);
            }}
            checked={genderFilter === "F"}
          />
        </div>

        <div className=" self-center flex w-8/12 justify-between">
          <span className=" self-center ml-4 mr-2 w-28 ">Joined Btw</span>
          <Input
            type="date"
            id="v-from"
            size={"sm"}
            alignSelf={"center"}
            width={"18rem"}
            value={startDateFilter}
            onChange={(e) => {
              setStartDateFilter(e.target.value);
            }}
          />
          <span className=" self-center mx-1"> - </span>
          <Input
            type="date"
            id="v-to"
            size={"sm"}
            width={"18rem"}
            alignSelf={"center"}
            value={endDateFilter}
            onChange={(e) => {
              setEndDateFilter(e.target.value);
            }}
          />
        </div>
        <button className="ml-4" onClick={clearFilters}>
          {" "}
          clear{" "}
        </button>
      </FilterCard>
      <FilterCard className="w-3/12 flex ml-3">
        <Input
          type="text"
          placeholder="Search"
          size={"sm"}
          border={"none"}
          value={nameFilter}
          onChange={(e) => {
            setNameFilter(e.target.value);
            setGenderFilter("");
            setStartDateFilter("");
            setEndDateFilter("");
          }}
        />
      </FilterCard>
    </div>
  );
};

export default StaffFilters;
