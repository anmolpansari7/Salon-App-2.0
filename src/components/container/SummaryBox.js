import React from "react";
import Card from "./Card";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";
import { useSelector } from "react-redux";

const SummaryBox = ({ heading, className }) => {
  const reportSummary = useSelector((state) => state.report.reportSummary);

  let data = [
    {
      content: "Order Delivered -",
      content2: `${reportSummary.totalCustomers}`,
    },
    {
      content: "Total Bill Amount -",
      content2: `${reportSummary.totalAmount} Rs.`,
    },
    {
      content: "Amount Collected -",
      content2: `${reportSummary.paidAmount} Rs.`,
    },
    {
      content: "Remaining Dues -",
      content2: `${reportSummary.totalAmount - reportSummary.paidAmount} Rs.`,
    },
    {
      content: "Points Used -",
      content2: `${reportSummary.pointsUsed} Pts.`,
    },
    {
      content: "Points Given -",
      content2: `${reportSummary.pointsEarned} Pts.`,
    },
  ];

  return (
    <Card className={"w-full mb-3 " + className}>
      <h1 className=" text-base font-medium border-b border-dashed border-black mb-5">
        {heading}
      </h1>
      <div className="flex flex-col space-y-3">
        {data.map((summary) => (
          <ListItemDBtn
            key={summary.content}
            content={summary.content}
            content2={summary.content2}
            className="text-sm"
            imageSrc={deleteBtn}
            showBtn={false}
            buttonImgClass={"h-4"}
          />
        ))}
      </div>
    </Card>
  );
};

export default SummaryBox;
