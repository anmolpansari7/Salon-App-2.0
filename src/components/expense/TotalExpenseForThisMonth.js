import React from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";

const ExpenseSummary = () => {
  return (
    <Card className="h-1/2 flex flex-col justify-between">
      <CardHeading className=" text-lg">Expense Summary</CardHeading>
      <div className=" flex flex-col space-y-2 max-h-[12rem] overflow-auto">
        <ListItemDBtn
          content={"Electricity"}
          content2={"250 Rs."}
          showBtn={false}
        />
        <ListItemDBtn content={"Water"} content2={"250 Rs."} showBtn={false} />
        <ListItemDBtn content={"Staff"} content2={"250 Rs."} showBtn={false} />
        <ListItemDBtn
          content={"Inventory"}
          content2={"250 Rs."}
          showBtn={false}
        />
        <ListItemDBtn
          content={"Internet"}
          content2={"250 Rs."}
          showBtn={false}
        />
      </div>
      <div className="mt-5 font-medium">
        <ListItemDBtn content={"Total"} content2={"250 Rs."} showBtn={false} />
      </div>
    </Card>
  );
};

export default ExpenseSummary;
