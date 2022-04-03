import React, { useMemo } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PreviousExpenseTable from "./PreviousExpenseTable";
import { useSelector } from "react-redux";
import moment from "moment";

const PreviousExpenses = () => {
  const previousExpenses = useSelector(
    (state) => state.expense.previousExpenses
  );

  console.log(previousExpenses);

  const data = useMemo(
    () =>
      previousExpenses.map((expense) => {
        return {
          col1: `${expense.category}`,
          col2: `${moment(expense.createdAt).format("ll")}`,
          col3: `${expense.amount} Rs.`,
          col4: `${expense.branch}`,
          col5: `${expense.remark === "" ? "---" : expense.remark}`,
        };
      }),
    [previousExpenses]
  );

  const columns = useMemo(
    () => [
      {
        Header: "Category ",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Added On",
        accessor: "col2",
      },
      {
        Header: "Cost",
        accessor: "col3",
      },
      {
        Header: "Branch",
        accessor: "col4",
      },
      {
        Header: "Remark",
        accessor: "col5",
      },
    ],
    []
  );

  return (
    <Card className="h-[36rem]">
      <CardHeading>Expense Details </CardHeading>
      <div>
        <PreviousExpenseTable
          columns={columns}
          data={data}
          className=" w-full"
        />
      </div>
    </Card>
  );
};

export default PreviousExpenses;
