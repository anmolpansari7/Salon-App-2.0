import React from "react";
import PageContainer from "./../components/container/PageContainer";
import StockItems from "../components/inventory/StockItems";
import PreviouslySoldItems from "../components/inventory/PreviouslySoldItems";

const InventoryPage = () => {
  return (
    <PageContainer>
      <StockItems />
      <PreviouslySoldItems />
    </PageContainer>
  );
};

export default InventoryPage;
