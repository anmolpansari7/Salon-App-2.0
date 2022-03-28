import React, { useState } from "react";
import Modal from "./../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import { Input } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import RadioButton from "./../custom_ui/RadioButton";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateInventoryItem } from "../../store/inventory-item-actions";

const UpdateInventoryItemModal = ({ id, n, g, c, onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [forGender, setForGender] = useState(g);
  const [itemName, setItemName] = useState(n);
  const [cost, setCost] = useState(c);

  const onItemModify = () => {
    const newInventoryItem = {
      gender: forGender,
      name: itemName,
      cost: cost,
    };
    console.log(newInventoryItem);
    dispatch(updateInventoryItem(id, forGender, itemName, cost, toast));
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <CardHeading> Modify Items -</CardHeading>
      <div className="flex flex-col space-y-3 w-96 mt-5">
        <div className="flex justify-between">
          <span className=" self-end">For -</span>
          <RadioButton
            name={"for-gender"}
            id={"female-item"}
            val={"F"}
            label={"Female"}
            onChange={(e) => {
              setForGender(e.target.value);
            }}
            checked={forGender === "F" ? true : false}
          />
          <RadioButton
            name={"for-gender"}
            id={"male-item"}
            val={"M"}
            label={"Male"}
            onChange={(e) => {
              setForGender(e.target.value);
            }}
            checked={forGender === "M" ? true : false}
          />
          <RadioButton
            name={"for-gender"}
            id={"anyones-item"}
            val={"A"}
            label={"Anyone"}
            onChange={(e) => {
              setForGender(e.target.value);
            }}
            checked={forGender === "A" ? true : false}
          />
        </div>
        <div className="flex justify-between">
          <span className=" self-end">Name -</span>
          <Input
            type={"text"}
            size={"sm"}
            width={"18rem"}
            textAlign={"right"}
            placeholder={"Item Name"}
            value={itemName}
            onChange={(e) => {
              setItemName(e.target.value);
            }}
            required
          />
        </div>
        <div className="flex justify-between">
          <span className=" self-end">Cost -</span>
          <Input
            type={"number"}
            size={"sm"}
            width={"18rem"}
            textAlign={"right"}
            placeholder={"Amount in Rupees"}
            value={cost}
            onChange={(e) => {
              setCost(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <PrimaryButton content={"Modify Item"} onClick={onItemModify} />
    </Modal>
  );
};

export default UpdateInventoryItemModal;
