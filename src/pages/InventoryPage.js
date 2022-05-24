import React, { useState } from "react";
import PageContainer from "./../components/container/PageContainer";
import StockItems from "../components/inventory/StockItems";
import PreviouslySoldItems from "../components/inventory/PreviouslySoldItems";
import FloatingButton from "./../components/custom_ui/FloatingButton";
import AddInventoryItemModal from "../components/inventory/AddInventoryItemModal";
import { useSelector } from "react-redux";

const InventoryPage = () => {
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  const [showAddInventoryItemModal, setShowAddInventoryItemModal] =
    useState(false);
  const onShowAddInventoryItemModal = () => {
    setShowAddInventoryItemModal(true);
  };

  const onHideInventoryItemModal = () => {
    setShowAddInventoryItemModal(false);
  };
  return (
    <PageContainer>
      <StockItems />
      {isAuthOwner && (
        <FloatingButton
          content={"New Item"}
          className={" right-12 "}
          onClick={onShowAddInventoryItemModal}
        />
      )}
      {showAddInventoryItemModal && (
        <AddInventoryItemModal onHideModal={onHideInventoryItemModal} />
      )}
    </PageContainer>
  );
};

export default InventoryPage;
