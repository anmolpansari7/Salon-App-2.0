import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../container/Card";
import OldMessage from "./OldMessage";
import { getPreviousMessages } from "../../store/message-action";

let messageContent =
  "This is previous Message. This is a previous Message. This is a previous Message. This is a previous Message. This is a previous message.";

const PreviousMessages = () => {
  const dispatch = useDispatch();

  const previousMessages = useSelector(
    (state) => state.message.previousMessages
  );

  useEffect(() => {
    // console.log("Get Previous Message");
    // dispatch(getPreviousMessages());
  }, [dispatch]);

  return (
    <Card className=" h-[40rem] max-h-[40rem] flex-1">
      <h1 className=" text-base border-b border-dashed border-black mb-4">
        Previous Messages
      </h1>
      <div className="flex flex-col space-y-3 overflow-auto max-h-[34rem]">
        {previousMessages.length === 0 ? (
          <p className=" text-sm text-zinc-400">No Previous Messages</p>
        ) : (
          <OldMessage messageContent={previousMessages.body} />
        )}
        <OldMessage messageContent={messageContent} />
        <OldMessage messageContent={messageContent} />
      </div>
    </Card>
  );
};

export default PreviousMessages;
