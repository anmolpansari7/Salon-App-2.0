import React, { useEffect, useState } from "react";
import PageContainer from "./../components/container/PageContainer";
import AddExpenseBox from "../components/expense/AddExpenseBox";
import AddExpenseCategory from "../components/expense/AddExpenseCategory";
import CurrentExpenseCategories from "../components/expense/CurrentExpenseCategories";
import ExpenseSummary from "../components/expense/TotalExpenseForThisMonth";
import ExpenseFilter from "../components/expense/ExpenseFilter";
import PreviousExpenses from "../components/expense/PreviousExpenses";
import ExpenseChart from "../components/expense/ExpenseChart";

import { useDispatch } from "react-redux";
import { getBranches } from "./../store/branch-actions";
import {
  getExpenseCategories,
  getExpenseDetails,
  getExpenseSummary,
} from "../store/expense-actions";

const ExpensePage = () => {
  const dispatch = useDispatch();
  const [branchFilter, setBranchFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  useEffect(() => {
    dispatch(getBranches());
    dispatch(getExpenseCategories());
    dispatch(getExpenseDetails(branchFilter, startDateFilter, endDateFilter));
    dispatch(getExpenseSummary(branchFilter, startDateFilter, endDateFilter));
  }, [branchFilter, startDateFilter, endDateFilter, dispatch]);

  const reset = () => {
    setBranchFilter("");
    setEndDateFilter("");
    setStartDateFilter("");
  };

  return (
    <PageContainer>
      <div className=" w-1/4 flex flex-col space-y-3">
        <AddExpenseBox />
        <AddExpenseCategory />
        <CurrentExpenseCategories />
      </div>
      <div className=" w-1/4 flex flex-col space-y-3">
        <ExpenseSummary />
        <ExpenseChart />
      </div>
      <div className=" w-2/4 flex flex-col space-y-5">
        <ExpenseFilter
          startDateFilter={startDateFilter}
          endDateFilter={endDateFilter}
          selectedBranch={branchFilter}
          setBranchFilter={setBranchFilter}
          setStartDateFilter={setStartDateFilter}
          setEndDateFilter={setEndDateFilter}
          reset={reset}
        />
        <PreviousExpenses />
      </div>
    </PageContainer>
  );
};

export default ExpensePage;
