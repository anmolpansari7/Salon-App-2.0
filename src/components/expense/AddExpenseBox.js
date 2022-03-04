import React, { useState } from "react";
import Card from "./../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import { Input, Select, useToast } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { sendNewExpenseData } from "../../store/expense-actions";

const AddExpenseBox = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const branches = useSelector((state) => state.branch.branchList);
  const expenseCategories = useSelector((state) => state.expense.categoryList);

  const [selectedCatetory, setSelectedCategory] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [amount, setAmount] = useState("");
  const [remark, setRemark] = useState("");

  const onAddNewExpense = () => {
    const newExpense = {
      branch: selectedBranch,
      category: selectedCatetory,
      amount: amount,
      remark: remark,
    };
    dispatch(sendNewExpenseData(newExpense, toast));
    setAmount("");
    setRemark("");
  };
  return (
    <Card className=" w-full h-fit">
      <CardHeading className=" text-lg">Add Expense</CardHeading>
      <div className=" space-y-3">
        <Select
          placeholder="Select Branch"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          onChange={(e) => {
            setSelectedBranch(e.target.value);
          }}
        >
          {branches.map(
            (branch) =>
              branch.status === "active" && (
                <option key={branch._id} value={branch._id}>
                  {branch.name}
                </option>
              )
          )}
        </Select>
        <div className=" flex justify-between">
          <Select
            placeholder="Select Category"
            fontSize={"0.875rem"}
            size={"sm"}
            alignSelf={"center"}
            width={"12rem"}
            onChange={(e) => {
              setSelectedCategory(e.target.value);
            }}
          >
            {expenseCategories.map(
              (category) =>
                category.status === "active" && (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                )
            )}
          </Select>
          <Input
            type="number"
            placeholder="Amount Rs."
            size="sm"
            width={"6rem"}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <Input
          type=" text"
          placeholder="Remark"
          size="sm"
          value={remark}
          onChange={(e) => {
            setRemark(e.target.value);
          }}
        />
        <PrimaryButton
          content={"Add"}
          type={"button"}
          onClick={onAddNewExpense}
        />
      </div>
    </Card>
  );
};

export default AddExpenseBox;
