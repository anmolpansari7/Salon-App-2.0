import React, { useEffect } from "react";
import FilterCard from "../container/FilterCard";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getStaffList } from "../../store/staff-actions";

const CurrentCustomerOrderFilter = ({
  staffFilter,
  setStaffFilter,
  startDateFilter,
  setStartDateFilter,
  endDateFilter,
  setEndDateFilter,
}) => {
  const dispatch = useDispatch();

  const staff = useSelector((state) => state.staff.staff);

  const clearFilters = () => {
    setStaffFilter("");
    setStartDateFilter("");
    setEndDateFilter("");
  };

  useEffect(() => {
    dispatch(getStaffList("", "", "", ""));
  }, []);

  return (
    <FilterCard className="flex justify-between text-sm">
      <Select
        placeholder="Filter by Staff"
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
        value={staffFilter}
        onChange={(e) => {
          setStaffFilter(e.target.value);
        }}
      >
        {staff.map((member) => (
          <option key={member._id} value={member._id}>
            {member.name}
          </option>
        ))}
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
          value={startDateFilter}
          onChange={(e) => {
            setStartDateFilter(e.target.value);
          }}
        />
        <span className=" self-center mx-4"> To </span>
        <Input
          type="date"
          id="v-to"
          placeholder=""
          label="To:"
          size={"sm"}
          alignSelf={"center"}
          value={endDateFilter}
          onChange={(e) => {
            setEndDateFilter(e.target.value);
          }}
        />
      </div>
      <button className=" ml-8" onClick={clearFilters}>
        {" "}
        clear{" "}
      </button>
    </FilterCard>
  );
};

export default CurrentCustomerOrderFilter;
