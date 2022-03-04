import React from "react";
import Modal from "../custom_ui/Modal";
import AddBranchForm from "./AddBranchForm";
import CurrentBranchesList from "./CurrentBranchesList";

const BranchEditModal = ({ onHideModal }) => {
  return (
    <Modal onHideModal={onHideModal}>
      <h3 className=" text-lg border-b border-dashed border-black mb-7">
        Current Branches -
      </h3>
      <CurrentBranchesList />
      <AddBranchForm onHideModal={onHideModal} />
    </Modal>
  );
};

export default BranchEditModal;
