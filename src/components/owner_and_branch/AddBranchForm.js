import React, { useState } from "react";
import PrimaryButton from "../custom_ui/PrimaryButton";
import PasswordInput from "../custom_ui/PasswordInput";
import { useDispatch } from "react-redux";
import { sendNewBranchData } from "../../store/branch-actions";
import { Input, Stack, useToast } from "@chakra-ui/react";

const AddBranchForm = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const onAddBranch = () => {
    if (password1 !== password2) {
      toast({
        title: "Passwords do not match",
        description: "Enter Same Password in both password inputs.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });

      return;
    }

    const newBranch = {
      name: name,
      password: password1,
    };

    dispatch(sendNewBranchData(newBranch, onHideModal, toast));
  };

  return (
    <form
      action=""
      className=" w-80 border border-gray-400 rounded-md px-3 pt-5 pb-2"
    >
      <Stack spacing={3}>
        <Input
          type="text"
          placeholder={"New Branch Name"}
          size="sm"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Password"
          value={password1}
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Re-enter Password"
          value={password2}
          onChange={(e) => {
            setPassword2(e.target.value);
          }}
        />
        <PrimaryButton
          content="Add Branch"
          type={"button"}
          onClick={onAddBranch}
        />
      </Stack>
    </form>
  );
};

export default AddBranchForm;
