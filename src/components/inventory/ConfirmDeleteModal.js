import React, { useState } from "react";
import Modal from "./../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import { Input, Button, ButtonGroup } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteInventoryItem } from "../../store/inventory-item-actions";

const ConfirmDeleteModal = ({ id, n, onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [name, setName] = useState("");

  const onConfirmDelete = () => {
    console.log("n : ", n);
    console.log("name : ", name);
    n = n.toLowerCase().replace(/\s/g, "");
    if (name !== n) {
      toast({
        title: "Not Matching",
        description: "Your Entered Name Should Match the Item Name.",
        status: "error",
        isClosable: true,
      });
      return;
    }
    dispatch(deleteInventoryItem(id, toast));
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <CardHeading>Confirm Delete -</CardHeading>
      <div className="flex flex-col w-[25rem] space-y-3">
        <p className=" text-center">
          Enter the name{" "}
          <span className=" font-medium text-red-400">
            {n.toLowerCase().replace(/\s/g, "")}
          </span>{" "}
          to delete it permanently from the stock of all branches.
        </p>
        <Input
          type={"text"}
          size={"sm"}
          width={"full"}
          textAlign={"center"}
          placeholder={"Item Name"}
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          borderColor={"gray"}
          required
        />
        <ButtonGroup className=" mt-3 self-center space-x-5">
          <Button
            fontWeight={"medium"}
            border="1px solid gray"
            onClick={onConfirmDelete}
          >
            Confirm
          </Button>
          <Button
            fontWeight={"medium"}
            border="1px solid gray"
            onClick={onHideModal}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    </Modal>
  );
};

export default ConfirmDeleteModal;
