import { Input, Select } from "@chakra-ui/react";
import React from "react";
import FilterCard from "./../container/FilterCard";
import { useSelector } from "react-redux";

const ExpenseFilter = ({
  startDateFilter,
  endDateFilter,
  setBranchFilter,
  setStartDateFilter,
  setEndDateFilter,
  reset,
  selectedBranch,
}) => {
  const branches = useSelector((state) => state.branch.branchList);

  return (
    <FilterCard className="flex text-sm justify-between">
      <Select
        placeholder="Select Branch"
        fontSize={"0.875rem"}
        size={"sm"}
        alignSelf={"center"}
        width={"12rem"}
        value={selectedBranch}
        onChange={(e) => {
          setBranchFilter(e.target.value);
        }}
      >
        {branches.map(
          (branch) =>
            branch.status === "active" && (
              <option key={branch._id} value={branch._id}>
                {branch.name}
              </option>
            )
        )}
      </Select>
      <p className=" self-center">Expense From -</p>
      <Input
        type="date"
        size="sm"
        width={"9.5rem"}
        value={startDateFilter}
        onChange={(e) => {
          setStartDateFilter(e.target.value);
        }}
      />
      <p className=" self-center">to</p>
      <Input
        type="date"
        size="sm"
        width={"9.5rem"}
        value={endDateFilter}
        onChange={(e) => {
          setEndDateFilter(e.target.value);
        }}
      />
      <button onClick={reset}>clear</button>
    </FilterCard>
  );
};

export default ExpenseFilter;
