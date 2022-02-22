import React, { useState } from "react";
import Card from "../container/Card";
import { Textarea, Input } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

const PackMessagePreviewBox = () => {
  let recordedMessage =
    "Dear <customer-name> \n Thank You! for being our valued cutomer. A new package only for you that includes. \n <package-items> \n with package Amount of <package-total> Rs. Valid from <valid-from> till <valid-upto> we sincerely appreciate your business ans hope you come back soon!";
  const [message, setMessage] = useState(recordedMessage);

  return (
    <Card className=" w-3/12 ">
      <h1 className=" text-lg border-b border-dashed border-black mb-5">
        Message Preview
      </h1>
      <Textarea
        placeholder="Here is a sample placeholder"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        height={"15rem"}
        maxHeight={"15rem"}
        fontSize={"0.90rem"}
      />
      <h1 className=" text-base border-b border-dashed border-black mt-5">
        Send this pack to
      </h1>
      <Input
        type={"text"}
        size={"sm"}
        placeholder={"Search Customers."}
        marginTop={"1rem"}
      />
      <p className=" mt-3 text-sm text-gray-400">Selected Customers - </p>
      <div className=" flex-wrap h-36 border border-gray-400 rounded-md p-3 overflow-auto first:mt-0">
        <Tag
          size={"sm"}
          borderRadius="full"
          variant="outline"
          fontSize={"sm"}
          padding={"5px"}
          paddingLeft={"15px"}
          colorScheme={"blackAlpha"}
          width={"7rem"}
          marginRight={"5px"}
          marginTop={"5px"}
        >
          <TagLabel>Arunesh Chopra</TagLabel>
          <TagCloseButton />
        </Tag>
        <Tag
          size={"sm"}
          borderRadius="full"
          variant="outline"
          fontSize={"sm"}
          padding={"5px"}
          paddingLeft={"15px"}
          colorScheme={"blackAlpha"}
          width={"7rem"}
          marginRight={"5px"}
          marginTop={"5px"}
        >
          <TagLabel>Hari Kishor Sahu</TagLabel>
          <TagCloseButton />
        </Tag>
        <Tag
          size={"sm"}
          borderRadius="full"
          variant="outline"
          fontSize={"sm"}
          padding={"5px"}
          paddingLeft={"15px"}
          colorScheme={"blackAlpha"}
          width={"7rem"}
          marginRight={"5px"}
          marginTop={"5px"}
        >
          <TagLabel>Arunesh Chopra</TagLabel>
          <TagCloseButton />
        </Tag>
      </div>
      <PrimaryButton content={"send"} />
    </Card>
  );
};

export default PackMessagePreviewBox;
