import React from "react";
import Card from "./../container/Card";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import { useSelector } from "react-redux";
import moment from "moment";

const CurrentCustomerInfo = () => {
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  console.log(currCustomer);

  return (
    <Card>
      <div className="w-full border-b border-dashed border-black pb-2">
        <h1 className=" text-xl font-medium text-center">
          {currCustomer.name}
        </h1>
        <h2 className=" text-base text-center">+91 {currCustomer.contact}</h2>
      </div>
      <div className=" flex flex-col space-y-2 mt-5">
        <ListItemDBtn
          content={"Points :"}
          content2={currCustomer.points + " Pts."}
          showBtn={false}
        />
        <ListItemDBtn
          content={"D.O.B :"}
          content2={moment(currCustomer.dob).format("ll")}
          showBtn={false}
        />
        <ListItemDBtn
          content={"Dues :"}
          content2={currCustomer.dues + " Rs."}
          showBtn={false}
        />
        <ListItemDBtn
          content={"Joined At :"}
          content2={moment(currCustomer.createdAt).format("ll")}
          showBtn={false}
        />
        <ListItemDBtn
          content={"Address :"}
          content2={currCustomer.address}
          showBtn={false}
        />
      </div>
    </Card>
  );
};

export default CurrentCustomerInfo;
