import React, { useState } from "react";
import { Input, useToast } from "@chakra-ui/react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch } from "react-redux";
import { sendNewExpenseCategories } from "../../store/expense-actions";

const AddExpenseCategory = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [categoryName, setCategoryName] = useState("");
  const onAddNewCategory = () => {
    dispatch(sendNewExpenseCategories(categoryName, toast));
    setCategoryName("");
  };

  return (
    <Card className=" w-full h-fit">
      <CardHeading className=" text-lg">Add Expense Category</CardHeading>
      <div className=" space-y-3">
        <Input
          type=" text"
          placeholder="Category Name"
          size="sm"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value);
          }}
        />
        <PrimaryButton
          type={"button"}
          content={"Add"}
          onClick={onAddNewCategory}
        />
      </div>
    </Card>
  );
};

export default AddExpenseCategory;
