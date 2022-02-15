import React from "react";
import Card from "../container/Card";
import InputAdd from "../custom_ui/InputAdd";
import PriceListItems from "./PriceListItems";

const PriceList = ({ title, gender, category, width, height }) => {
  return (
    <Card styles={"flex flex-col " + width + " " + height}>
      <h1 className=" text-xl border-b border-dashed border-black mb-5">
        {title}
      </h1>
      <PriceListItems />
      <form action="" className="mt-5">
        <InputAdd placeholder="Add Items" />
      </form>
    </Card>
  );
};

export default PriceList;
