import React from "react";
import Card from "../container/Card";
import CardHeading from "./../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { useSelector } from "react-redux";
import moment from "moment";

const CurrentCustomerActivePackage = () => {
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  console.log(currCustomer);

  return (
    <Card className="flex-1">
      <CardHeading className=" font-medium text-base flex-1">
        Active Packages
      </CardHeading>
      <div className=" flex flex-col space-y-3 mt-5">
        <ListItemDBtn
          content={"Pack Name"}
          content2={"Great Khali"}
          showBtn={false}
          className=" text-sm"
        />
        <ListItemDBtn
          content={"Created On"}
          content2={"Feb 12 2010"}
          showBtn={false}
          className=" text-sm"
        />
        <ListItemDBtn
          content={"Valid till"}
          content2={"Mar 12 2010"}
          showBtn={false}
          className=" text-sm"
        />
        <ListItemDBtn
          content={"Pack Amount"}
          content2={"520 Rs."}
          showBtn={false}
          className=" text-sm"
        />
        <ListItemDBtn
          content={"Actual Amount"}
          content2={"600 Rs."}
          showBtn={false}
          className=" text-sm"
        />
      </div>
      <div className=" border border-gray-400 rounded-md h-24 mt-3 px-2 py-1">
        <span className=" text-gray-400 text-sm">Display Items</span>
      </div>
    </Card>
  );
};

export default CurrentCustomerActivePackage;
