import React, { useMemo } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PreviousExpenseTable from "./PreviousExpenseTable";

const PreviousExpenses = () => {
  const data = useMemo(
    () => [
      {
        col1: "Electricity -",
        col2: "02-03-2022",
        col3: 500,
        col4: "Paying Electricity Bill",
      },
      {
        col1: "Water Bill -",
        col2: "12-02-2022",
        col3: 1200,
        col4: "Paying Water Bill",
      },
      {
        col1: "Staff",
        col2: "02-03-2022",
        col3: 5500,
        col4: "Suresh Payment",
      },
      {
        col1: "Internet -",
        col2: "02-03-2022",
        col3: 500,
        col4: "May Internet Bill",
      },
      {
        col1: "Celebration",
        col2: "02-03-2022",
        col3: 500,
        col4: "My Birthday party.",
      },
    ],
    []
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
        Header: "Remark",
        accessor: "col4",
      },
    ],
    []
  );

  return (
    <Card className="flex-1">
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
