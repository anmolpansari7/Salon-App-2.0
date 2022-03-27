import React, { useEffect, useMemo, useState } from "react";
import Card from "../container/Card";
import { ReactComponent as EditBtn } from "../../assets/pencilImg.svg";
import AddRemoveStockItems from "./AddRemoveStockItems";
import StockTable from "./StockTable";
import CardHeading from "./../custom_ui/CardHeading";
import { useSelector, useDispatch } from "react-redux";
import { getBranches } from "../../store/branch-actions";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import AddItemToNewBranchModal from "./AddItemToNewBranchModal";
import { getInventoryItems } from "../../store/inventory-item-actions";

const StockItems = () => {
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state.inventory.inventoryItems);

  const [showAddItemToBranchModal, setShowAddItemToBranchModal] =
    useState(false);
  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedItemName, setSelectedItemName] = useState("");

  const onCloseAddItemToBranchModal = () => {
    setShowAddItemToBranchModal(false);
  };

  useEffect(() => {
    dispatch(getBranches());
    dispatch(getInventoryItems());
  }, []);

  // const data = useMemo(
  //   () => [
  //     {
  //       col1: "Shaving Cream",
  //       col2: "250 Rs.",
  //       col3: "15",
  //       col4: <AddRemoveStockItems />,
  //       col5: "21-02-2022",
  //     },
  //     {
  //       col1: "Plastic Combs",
  //       col2: "50 Rs.",
  //       col3: 20,
  //       col4: <AddRemoveStockItems />,
  //       col5: "21-02-2022",
  //     },
  //     {
  //       col1: "Ear Cleaning Buds",
  //       col2: "250 Rs.",
  //       col3: 12,
  //       col4: <AddRemoveStockItems />,
  //       col5: "21-02-2022",
  //     },
  //     {
  //       col1: "Haircare kit",
  //       col2: "250 Rs.",
  //       col3: 12,
  //       col4: <AddRemoveStockItems />,
  //       col5: "21-02-2022",
  //     },
  //   ],
  //   []
  // );

  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Product Name",
  //       accessor: "col1", // accessor is the "key" in the data
  //     },
  //     {
  //       Header: "Price",
  //       accessor: "col2",
  //     },
  //     {
  //       Header: "Quantity",
  //       accessor: "col3",
  //     },
  //     {
  //       Header: "Add/Remove",
  //       accessor: "col4",
  //     },
  //     {
  //       Header: "Last Sold on",
  //       accessor: "col5",
  //     },
  //   ],
  //   []
  // );

  console.log(inventoryItems);
  return (
    <Card className="w-7/12">
      <CardHeading className=" text-lg">Items in Stock -</CardHeading>
      {/* <StockTable className={" w-full"} data={data} columns={columns} /> */}
      <Accordion allowToggle>
        {inventoryItems.map((item) => (
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
                  return (
                    <div className=" flex justify-between border-b border-gray-500">
                      <p className="self-end">{branch.branchId}</p>
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
                })}
              </form>
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
                +
              </Button>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      {showAddItemToBranchModal && (
        <AddItemToNewBranchModal
          selectedItemId={selectedItemId}
          selectedItemName={selectedItemName}
          onHideModal={onCloseAddItemToBranchModal}
        />
      )}
    </Card>
  );
};

export default StockItems;
