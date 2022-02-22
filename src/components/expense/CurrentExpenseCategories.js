import React from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";

const CurrentExpenseCategories = () => {
  return (
    <Card className="max-h-[13.5rem]">
      <CardHeading className=" text-lg">Current Expense Categories</CardHeading>
      <div className="max-h-[8rem] flex flex-col space-y-2 overflow-auto">
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
        <ListItemDBtn
          content={"Electricity"}
          content2={""}
          showBtn={true}
          imageSrc={deleteBtn}
        />
      </div>
    </Card>
  );
};

export default CurrentExpenseCategories;
