import React from "react";
import PageContainer from "./../components/container/PageContainer";
import AddExpenseBox from "../components/expense/AddExpenseBox";
import AddExpenseCategory from "../components/expense/AddExpenseCategory";
import CurrentExpenseCategories from "../components/expense/CurrentExpenseCategories";
import ExpenseSummary from "../components/expense/TotalExpenseForThisMonth";
import ExpenseFilter from "../components/expense/ExpenseFilter";
import PreviousExpenses from "../components/expense/PreviousExpenses";

const ExpensePage = () => {
  return (
    <PageContainer>
      <div className=" w-1/4 flex flex-col space-y-3">
        <AddExpenseBox />
        <AddExpenseCategory />
        <CurrentExpenseCategories />
      </div>
      <div className=" w-1/4 flex flex-col space-y-3">
        <ExpenseSummary />
      </div>
      <div className=" w-2/4 flex flex-col space-y-5">
        <ExpenseFilter />
        <PreviousExpenses />
      </div>
    </PageContainer>
  );
};

export default ExpensePage;
