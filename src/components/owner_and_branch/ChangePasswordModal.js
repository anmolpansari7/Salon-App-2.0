import React, { useState } from "react";
import Modal from "../custom_ui/Modal";
import RadioButton from "../custom_ui/RadioButton";
import { Select, Stack, useToast } from "@chakra-ui/react";
import PasswordInput from "../custom_ui/PasswordInput";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  requestPasswordChangeForBranch,
  requestPasswordChangeForOwner,
} from "../../store/auth-actions";

const ChangePasswordModal = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const branches = useSelector((state) => state.branch.branchList);

  const [changeFor, setChangeFor] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");
  const [ownerPassword, setOwnerPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnteredPassword, setReEnteredPassword] = useState("");

  const onChangePassword = () => {
    if (newPassword !== reEnteredPassword) {
      toast({
        title: "Password Miss-matched!",
        description: "New Password and re-entered password are different.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (changeFor === "owner") {
      dispatch(
        requestPasswordChangeForOwner(
          newPassword,
          ownerPassword,
          navigate,
          toast
        )
      );
    } else if (changeFor === "branch") {
      dispatch(
        requestPasswordChangeForBranch(
          newPassword,
          ownerPassword,
          selectedBranch,
          toast
        )
      );
    }
    onHideModal();
  };

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
          val="owner"
          label="Onwer"
          onChange={(e) => {
            setChangeFor(e.target.value);
          }}
        />
        <RadioButton
          name="change-password"
          id="change-password-branch"
          val="branch"
          label="Branch"
          onChange={(e) => {
            setChangeFor(e.target.value);
          }}
        />
      </div>
      <Stack spacing={3}>
        <Select
          placeholder="Select Branch"
          size="md"
          disabled={changeFor === "owner"}
          onChange={(e) => {
            setSelectedBranch(e.target.value);
          }}
        >
          {branches.map((branch) => (
            <option value={branch._id}>{branch.name}</option>
          ))}
        </Select>
        <PasswordInput
          placeholder="Owner's Password"
          onChange={(e) => {
            setOwnerPassword(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="New Password"
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
        />
        <PasswordInput
          placeholder="Re-enter New Password"
          onChange={(e) => {
            setReEnteredPassword(e.target.value);
          }}
        />
        <PrimaryButton content="Change" onClick={onChangePassword} />
      </Stack>
    </Modal>
  );
};

export default ChangePasswordModal;
