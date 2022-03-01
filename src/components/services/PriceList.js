import React from "react";
import Card from "../container/Card";
import AddServiceForm from "../custom_ui/AddServiceForm";
import PriceListItems from "./PriceListItems";

const PriceList = ({ title, gender, category, width, height, services }) => {
  return (
    <Card className={"flex flex-col " + width + " " + height}>
      <h1 className=" text-xl border-b border-dashed border-black mb-5">
        {title}
      </h1>
      <PriceListItems services={services} gender={gender} category={category} />
      <AddServiceForm category={category} gender={gender} />
    </Card>
  );
};

export default PriceList;
