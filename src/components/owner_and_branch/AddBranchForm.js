import React from "react";
import PrimaryButton from "../custom_ui/PrimaryButton";
import PasswordInput from "../custom_ui/PasswordInput";
import { Input, Stack } from "@chakra-ui/react";

const AddBranchForm = () => {
  return (
    <form
      action=""
      className=" w-80 border border-gray-400 rounded-md px-3 pt-5 pb-2"
    >
      <Stack spacing={3}>
        {/* <InputAdd type="text" placeholder="New Branch Name" /> */}
        <Input type="text" placeholder={"New Branch Name"} size="sm" />
        <PasswordInput placeholder="Password" />
        <PasswordInput placeholder="Re-enter Password" />
        <PrimaryButton content="Add Branch" />
      </Stack>
    </form>
  );
};

export default AddBranchForm;
