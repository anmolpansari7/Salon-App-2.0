import React from "react";
import Modal from "../custom_ui/Modal";
import RadioButton from "../custom_ui/RadioButton";
import { Select, Stack } from "@chakra-ui/react";
import PasswordInput from "../custom_ui/PasswordInput";
import PrimaryButton from "../custom_ui/PrimaryButton";

const ChangePasswordModal = ({ onHideModal }) => {
  return (
    <Modal onHideModal={onHideModal}>
      <h3 className=" text-lg border-b border-dashed border-black mb-7">
        Change Password
      </h3>
      <div className="flex border-b border-dashed border-black justify-between mb-5 w-80">
        <p>For -</p>
        <RadioButton
          name="change-password"
          id="change-password-owner"
          val="onwer"
          label="Onwer"
        />
        <RadioButton
          name="change-password"
          id="change-password-branch"
          val="branch"
          label="Branch"
        />
      </div>
      <Stack spacing={3}>
        <Select placeholder="Select Branch" size="md">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <PasswordInput placeholder="Owner's Password" />
        <PasswordInput placeholder="New Password" />
        <PasswordInput placeholder="Re-enter New Password" />
        <PrimaryButton content="Change" />
      </Stack>
    </Modal>
  );
};

export default ChangePasswordModal;
