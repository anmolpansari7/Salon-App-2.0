import React from "react";
import Card from "../container/Card";
import OldMessage from "./OldMessage";

let messageContent =
  "This is previous Message. This is a previous Message. This is a previous Message. This is a previous Message. This is a previous message.";

const PreviousMessages = () => {
  return (
    <Card className=" h-[40rem] max-h-[40rem] flex-1">
      <h1 className=" text-base border-b border-dashed border-black mb-4">
        Previous Messages
      </h1>
      <div className="flex flex-col space-y-3 overflow-auto max-h-[34rem]">
        <OldMessage messageContent={messageContent} />
        <OldMessage messageContent={messageContent} />
        <OldMessage messageContent={messageContent} />
      </div>
    </Card>
  );
};

export default PreviousMessages;
