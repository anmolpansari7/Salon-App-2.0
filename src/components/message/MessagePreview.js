import { Textarea } from "@chakra-ui/react";
import React from "react";
import Card from "../container/Card";
import PrimaryButton from "../custom_ui/PrimaryButton";

const MessagePreview = () => {
  return (
    <Card className=" max-w-[23rem] flex flex-col justify-between">
      <div>
        <h1 className=" text-base border-b border-dashed border-black mb-2">
          Message Preview
        </h1>
        <Textarea
          height={"15rem"}
          maxHeight={"15rem"}
          width={"20.5rem"}
          placeholder="Type Your Message here"
          fontSize={"0.875rem"}
        />
        <p className=" text-base border-b border-dashed border-black mt-4">
          Note -
        </p>
        <p className=" text-sm mt-3">
          This Message will be sent to all the selected customer on the left
          pannel.
        </p>
      </div>
      <PrimaryButton content={"send"} />
    </Card>
  );
};

export default MessagePreview;
