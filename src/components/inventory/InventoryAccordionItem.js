import React from "react";
import { ReactComponent as EditBtn } from "../../assets/pencilImg.svg";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";

const InventoryAccordionItem = ({
  item,
  setSelectedItemId,
  setSelectedItemName,
  setSelectedItemGender,
  setSelectedItemCost,
  setShowAddItemToBranchModal,
  setShowUpdateItemModal,
  setShowConfirmDeleteItemModal,
}) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            display={"flex"}
            justifyContent={"space-between"}
          >
            <p>{item.name}</p>
            <p>{item.cost} Rs.</p>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <form action="" className="mb-3">
          {item.distributions.map((branch) => {
            if (branch.quantity !== undefined) {
              return (
                <div className=" flex justify-between border-b border-gray-500">
                  <p className="self-end">{branch.branch}</p>
                  <div className="flex">
                    <p className="self-end">Quantity : {branch.quantity}</p>
                    <Button
                      colorScheme="black"
                      size={"sm"}
                      fontWeight={"normal"}
                    >
                      <EditBtn />
                    </Button>
                  </div>
                </div>
              );
            }
          })}
        </form>
        <div className="flex space-x-3">
          <Button
            colorScheme="black"
            variant={"outline"}
            color={"black"}
            size={"xs"}
            alignSelf="right"
            fontWeight={"normal"}
            onClick={() => {
              setShowAddItemToBranchModal(true);
              setSelectedItemId(item._id);
              setSelectedItemName(item.name);
            }}
          >
            add or remove
          </Button>
          <Button
            colorScheme="black"
            variant={"outline"}
            color={"black"}
            size={"xs"}
            alignSelf="right"
            fontWeight={"normal"}
            onClick={() => {
              setSelectedItemId(item._id);
              setSelectedItemGender(item.gender);
              setSelectedItemCost(item.cost);
              setSelectedItemName(item.name);
              setShowUpdateItemModal(true);
            }}
          >
            Edit Item
          </Button>
          <Button
            colorScheme="black"
            variant={"outline"}
            color={"black"}
            size={"xs"}
            alignSelf="right"
            fontWeight={"normal"}
            onClick={() => {
              setSelectedItemId(item._id);
              setSelectedItemName(item.name);
              setShowConfirmDeleteItemModal(true);
            }}
          >
            Delete Item
          </Button>
        </div>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InventoryAccordionItem;
