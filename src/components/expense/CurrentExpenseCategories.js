import React from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { deleteExpenseCategory } from "../../store/expense-actions";

const CurrentExpenseCategories = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const expenseCategories = useSelector((state) => state.expense.categoryList);

  return (
    <Card className="max-h-[13.5rem] flex-1">
      <CardHeading className=" text-lg">Current Expense Categories</CardHeading>
      <div className="max-h-[8rem] flex flex-col space-y-2 overflow-auto">
        {expenseCategories.map(
          (category) =>
            category.status === "active" && (
              <ListItemDBtn
                key={category._id}
                content={category.name}
                content2={""}
                showBtn={true}
                imageSrc={deleteBtn}
                onItemDelete={() => {
                  dispatch(deleteExpenseCategory(category._id, toast));
                }}
              />
            )
        )}
      </div>
    </Card>
  );
};

export default CurrentExpenseCategories;
