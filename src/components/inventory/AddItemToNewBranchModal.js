import { Input, Select, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBranches } from "../../store/branch-actions";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";
import Modal from "../custom_ui/Modal";
import { addItemToBranch } from "../../store/inventory-item-actions";

const AddItemToNewBranchModal = ({
  selectedItemId,
  selectedItemName,
  onHideModal,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const branches = useSelector((state) => state.branch.branchList);

  const [selectedBranchId, setSelectedBranchId] = useState("");
  const [quantity, setQuantity] = useState("");

  const onAddStock = () => {
    dispatch(
      addItemToBranch(selectedItemId, selectedBranchId, quantity, toast)
    );
  };

  return (
    <Modal onHideModal={onHideModal}>
      <CardHeading>Add {selectedItemName} :</CardHeading>
      <div className="flex flex-col space-y-3 w-96 mt-5">
        <div className="flex justify-between">
          <span className=" self-center">Branch</span>
          <Select
            placeholder="Select option"
            width={"18rem"}
            onChange={(e) => {
              setSelectedBranchId(e.target.value);
            }}
            size="sm"
          >
            {branches.map(
              (branch) =>
                branch.status === "active" && (
                  <option value={branch._id}>{branch.name}</option>
                )
            )}
          </Select>
        </div>
        <div className="flex justify-between">
          <span className=" self-center">Quantity</span>
          <Input
            type={"number"}
            size={"sm"}
            width={"18rem"}
            textAlign={"right"}
            placeholder={"0"}
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <PrimaryButton content={"Add to Stock"} onClick={onAddStock} />
    </Modal>
  );
};

export default AddItemToNewBranchModal;
