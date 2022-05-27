import React from "react";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";

import { Tag } from "@chakra-ui/react";
import { useSelector } from "react-redux";

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
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

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
            <div className=" flex space-x-5">
              <p>{item.cost} Rs.</p>
              <Tag>{item.gender}</Tag>
            </div>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <div className="flex flex-col space-y-3 first:mt-2">
          {item.distributions.map((branch) => {
            if (
              branch.quantity !== undefined &&
              branch.branchStatus === "active"
            ) {
              return (
                <div
                  key={branch.branchId}
                  className=" flex justify-between border-b border-gray-500"
                >
                  <p className="self-end">{branch.branch}</p>
                  <div className="flex">
                    <p className="self-end">Quantity : {branch.quantity}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {isAuthOwner && (
          <div className="flex space-x-3 mt-3">
            <Button
              key={"B1"}
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
              key={"B2"}
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
              key={"B3"}
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
        )}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default InventoryAccordionItem;
