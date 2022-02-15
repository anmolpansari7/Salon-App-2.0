import React from "react";
import PriceList from "../components/services/PriceList";

const PricePage = () => {
  return (
    <div className="flex-1 bg-app-bg font-body px-10 py-5 flex space-x-5">
      <PriceList
        title="Price List for Male"
        gender="M"
        category="services"
        height="max-h-[42rem]"
        width="w-1/3"
      />
      <PriceList
        title="Price List for Female"
        gender="F"
        category="services"
        height="max-h-[42rem]"
        width="w-1/3"
      />
      <div className="flex flex-col space-y-7 w-1/3 max-h-[38.5rem]">
        <PriceList
          title="Deal List for Male"
          gender="M"
          category="deals"
          height="h-1/2 max-h-[42rem]"
          width="w-full"
        />
        <PriceList
          title="Deal List for Female"
          gender="F"
          category="deals"
          height="h-1/2 max-h-[42rem]"
          width="w-full"
        />
      </div>
    </div>
  );
};

export default PricePage;
