import React from "react";
import Card from "./../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import { Input, Select } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";

const AddExpenseBox = () => {
  return (
    <Card className=" w-full h-fit">
      <CardHeading className=" text-lg">Add Expense</CardHeading>
      <div className=" space-y-3">
        <Select
          placeholder="Select Category"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <Input type=" text" placeholder="Amount Rs." size="sm" />
        <Input type=" text" placeholder="Remark" size="sm" />
        <PrimaryButton content={"Add"} />
      </div>
    </Card>
  );
};

export default AddExpenseBox;
