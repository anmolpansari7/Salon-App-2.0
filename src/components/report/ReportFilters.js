import React from "react";
import FilterCard from "../container/FilterCard";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const ReportFilters = ({
  branchFilter,
  setBranchFilter,
  staffFilter,
  setStaffFilter,
  startDateFilter,
  setStartDateFilter,
  endDateFilter,
  setEndDateFilter,
  nameFilter,
  setNameFilter,
}) => {
  const staff = useSelector((state) => state.staff.staff);
  const branches = useSelector((state) => state.branch.branchList);

  const clearFilters = () => {
    setBranchFilter("");
    setStaffFilter("");
    setStartDateFilter("");
    setEndDateFilter("");
    setNameFilter("");
  };

  return (
    <div className="w-full flex mb-3 text-sm">
      <FilterCard className="flex justify-between w-9/12">
        <Select
          placeholder="Filter by Branch"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          value={branchFilter}
          onChange={(e) => {
            setBranchFilter(e.target.value);
          }}
        >
          {branches.map((branch) => (
            <option key={branch._id} value={branch._id}>
              {branch.name}
            </option>
          ))}
        </Select>

        <Select
          placeholder="Filter by Staff"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          marginLeft={"1rem"}
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

        <div className=" self-center flex w-8/12 justify-between">
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
          <span className=" self-center mx-1"> To </span>
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
            setBranchFilter("");
            setStaffFilter("");
            setStartDateFilter("");
            setEndDateFilter("");
            setNameFilter(e.target.value);
          }}
        />
      </FilterCard>
    </div>
  );
};

export default ReportFilters;
