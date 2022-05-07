import React from "react";
import Card from "./Card";
import ListItemDBtn from "./../custom_ui/ListItemDBtn";
import deleteBtn from "./../../assets/delete_btn.svg";

const SummaryBox = ({ heading, className, data }) => {
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
