import React from "react";
import PageContainer from "../components/container/PageContainer";
import PriceList from "../components/services/PriceList";

const PricePage = () => {
  return (
    <PageContainer>
      <PriceList
        title="Price List for Male"
        gender="M"
        category="services"
        height="max-h-[40.5rem]"
        width="w-1/3"
      />
      <PriceList
        title="Price List for Female"
        gender="F"
        category="services"
        height="max-h-[40.5rem]"
        width="w-1/3"
      />
      <div className="flex flex-col justify-between w-1/3 h-[40.5rem]">
        <PriceList
          title="Deal List for Male"
          gender="M"
          category="deals"
          height="h-1/2 max-h-[19.5rem]"
          width="w-full"
        />
        <PriceList
          title="Deal List for Female"
          gender="F"
          category="deals"
          height="h-1/2 max-h-[19.5rem]"
          width="w-full"
        />
      </div>
    </PageContainer>
  );
};

export default PricePage;
