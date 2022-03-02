import React, { useState } from "react";
import Card from "../container/Card";
import { Textarea, Input } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import useSearchSuggestions from "./UseSearchSuggestions";
import { useSelector } from "react-redux";
import CustomerSuggestions from "./CustomerSuggestions";

const PackMessagePreviewBox = ({
  message,
  setMessage,
  selectedCustomer,
  setSelectedCustomer,
  onSendPackage,
}) => {
  const [lenColor, setLenColor] = useState("text-gray-400");
  const [query, setQuery] = useState("");
  const suggestedCustomers = useSelector((state) => state.packages.suggestions);

  // const toast = useToast();
  useSearchSuggestions(query);

  const onCustomerSelect = (customer) => {
    setSelectedCustomer([...selectedCustomer, customer]);
    setQuery("");
  };

  const onCustomerRemove = (customerId) => {
    let list = selectedCustomer.filter(
      (customer) => customer._id !== customerId
    );
    setSelectedCustomer(list);
  };

  return (
    <Card className=" w-3/12 ">
      <h1 className=" text-lg border-b border-dashed border-black mb-5">
        Message Preview
      </h1>
      <div className="relative">
        <Textarea
          placeholder="Type your message here."
          value={message}
          height={"15rem"}
          maxHeight={"15rem"}
          fontSize={"0.90rem"}
          onChange={(e) => {
            setMessage(e.target.value);
            message.length > 160
              ? setLenColor("text-red-400")
              : setLenColor("text-gray-400");
          }}
        />
        <span className={" absolute bottom-2 left-3 text-sm " + lenColor}>
          {message.length}/160 character
        </span>
      </div>
      <h1 className=" text-base border-b border-dashed border-black mt-5">
        Send this pack to
      </h1>
      <div className=" relative">
        <Input
          type={"text"}
          size={"sm"}
          placeholder={"Search Customers."}
          marginTop={"1rem"}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <CustomerSuggestions
          suggestedCustomers={suggestedCustomers}
          className={" absolute w-full max-h-56 overflow-auto z-10"}
          onCustomerSelect={onCustomerSelect}
        />
      </div>
      <p className=" mt-3 text-sm text-gray-400">Selected Customers - </p>
      <div className=" flex-wrap h-36 border border-gray-400 rounded-md p-3 overflow-auto first:mt-0">
        {selectedCustomer.map((customer) => (
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
            <TagLabel>{customer.name}</TagLabel>
            <TagCloseButton
              onClick={() => {
                onCustomerRemove(customer._id);
              }}
            />
          </Tag>
        ))}
      </div>
      <PrimaryButton type={"button"} content={"send"} onClick={onSendPackage} />
    </Card>
  );
};

export default PackMessagePreviewBox;
