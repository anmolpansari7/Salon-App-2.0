import React from "react";
import { Input } from "@chakra-ui/react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";

const AddExpenseCategory = () => {
  return (
    <Card className=" w-full h-fit">
      <CardHeading className=" text-lg">Add Expense Category</CardHeading>
      <div className=" space-y-3">
        <Input type=" text" placeholder="Category Name" size="sm" />
        <PrimaryButton content={"Add"} />
      </div>
    </Card>
  );
};

export default AddExpenseCategory;
