import React, { useEffect, useMemo, useState } from "react";
import Card from "../container/Card";
import AddRemoveStockItems from "./AddRemoveStockItems";
import StockTable from "./StockTable";
import CardHeading from "./../custom_ui/CardHeading";
import { useSelector, useDispatch } from "react-redux";
import { getBranches } from "../../store/branch-actions";
import InventoryAccordionItem from "./InventoryAccordionItem";

import { Accordion } from "@chakra-ui/react";

import AddItemToNewBranchModal from "./AddItemToNewBranchModal";
import { getInventoryItems } from "../../store/inventory-item-actions";
import UpdateInventoryItemModal from "./UpdateInventoryItemModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const StockItems = () => {
  const dispatch = useDispatch();
  const inventoryItems = useSelector((state) => state.inventory.inventoryItems);
  console.log(inventoryItems);

  const [showAddItemToBranchModal, setShowAddItemToBranchModal] =
    useState(false);
  const [showUpdateItemModal, setShowUpdateItemModal] = useState(false);
  const [showConfirmDeleteItemModal, setShowConfirmDeleteItemModal] =
    useState(false);

  const [selectedItemId, setSelectedItemId] = useState("");
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedItemGender, setSelectedItemGender] = useState("");
  const [selectedItemCost, setSelectedItemCost] = useState("");

  const onCloseAddItemToBranchModal = () => {
    setShowAddItemToBranchModal(false);
  };

  const onCloseUpdateInventoryModal = () => {
    setShowUpdateItemModal(false);
  };

  const onCloseConfirmDeleteModal = () => {
    setShowConfirmDeleteItemModal(false);
  };

  useEffect(() => {
    dispatch(getBranches());
    dispatch(getInventoryItems());
  }, []);

  console.log(inventoryItems);
  return (
    <Card className="w-7/12 max-h-[42rem] overflow-auto">
      <CardHeading className=" text-lg">Items in Stock -</CardHeading>
      {/* <StockTable className={" w-full"} data={data} columns={columns} /> */}
      <Accordion allowToggle>
        {inventoryItems.map(
          (item) =>
            item.status === "active" && (
              <InventoryAccordionItem
                key={item._id}
                item={item}
                setSelectedItemId={setSelectedItemId}
                setSelectedItemName={setSelectedItemName}
                setSelectedItemGender={setSelectedItemGender}
                setSelectedItemCost={setSelectedItemCost}
                setShowAddItemToBranchModal={setShowAddItemToBranchModal}
                setShowUpdateItemModal={setShowUpdateItemModal}
                setShowConfirmDeleteItemModal={setShowConfirmDeleteItemModal}
              />
            )
        )}
      </Accordion>
      {showAddItemToBranchModal && (
        <AddItemToNewBranchModal
          selectedItemId={selectedItemId}
          selectedItemName={selectedItemName}
          onHideModal={onCloseAddItemToBranchModal}
        />
      )}
      {showUpdateItemModal && (
        <UpdateInventoryItemModal
          id={selectedItemId}
          n={selectedItemName}
          g={selectedItemGender}
          c={selectedItemCost}
          onHideModal={onCloseUpdateInventoryModal}
        />
      )}
      {showConfirmDeleteItemModal && (
        <ConfirmDeleteModal
          id={selectedItemId}
          n={selectedItemName}
          onHideModal={onCloseConfirmDeleteModal}
        />
      )}
    </Card>
  );
};

export default StockItems;
