import React from "react";
import { useSelector } from "react-redux";
import Card from "../container/Card";
import AddServiceForm from "../custom_ui/AddServiceForm";
import PriceListItems from "./PriceListItems";

const PriceList = ({ title, gender, category, width, height, services }) => {
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);

  return (
    <Card className={"flex flex-col " + width + " " + height}>
      <h1 className=" text-xl border-b border-dashed border-black mb-5">
        {title}
      </h1>
      <PriceListItems services={services} gender={gender} category={category} />
      {isAuthOwner && <AddServiceForm category={category} gender={gender} />}
    </Card>
  );
};

export default PriceList;
