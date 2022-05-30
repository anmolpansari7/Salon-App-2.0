import React, { useState } from "react";
import { Textarea } from "@chakra-ui/react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";

const MessagePreview = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <Card className=" max-w-[23rem] flex flex-col justify-between">
      <div>
        <CardHeading className=" text-base">Message Preview</CardHeading>
        <div className="relative">
          <Textarea
            height={"15rem"}
            maxHeight={"15rem"}
            width={"20.5rem"}
            placeholder="Type Your Message here"
            fontSize={"0.875rem"}
            value={message}
            className={" mt-2"}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <p
            className={
              " absolute bottom-2 left-5 text-sm " +
              (message.length > 260 ? " text-red-400 " : " text-gray-400 ")
            }
          >
            {message.length} /260 words
          </p>
        </div>
        <CardHeading className=" mt-2">Note -</CardHeading>
        <p className=" text-sm mt-3">
          This Message will be sent to all the selected customer on the left
          pannel.
        </p>
      </div>
      <PrimaryButton
        content={"send"}
        onClick={() => {
          onSendMessage(message);
        }}
      />
    </Card>
  );
};

export default MessagePreview;
