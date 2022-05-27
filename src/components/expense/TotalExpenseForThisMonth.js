import React, { useEffect, useState } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { useSelector } from "react-redux";

const ExpenseSummary = () => {
  const summaries = useSelector((state) => state.expense.expenseSummary);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let curr = 0;
    summaries.forEach((summary) => {
      curr += summary.totalAmount;
    });
    setTotal(curr);
  }, [summaries]);

  return (
    <Card className=" h-1/2 overflow-auto flex flex-col justify-between">
      <CardHeading className=" text-lg">Expense Summary</CardHeading>
      <div className=" flex flex-col flex-1 space-y-2 max-h-[12rem] overflow-auto">
        {summaries.map((summary) => (
          <ListItemDBtn
            key={summary._id}
            content={summary._id}
            content2={`${summary.totalAmount} Rs.`}
            showBtn={false}
          />
        ))}
      </div>
      <div className="mt-5 font-medium">
        <ListItemDBtn
          content={"Total"}
          content2={total + " Rs."}
          showBtn={false}
        />
      </div>
    </Card>
  );
};

export default ExpenseSummary;
