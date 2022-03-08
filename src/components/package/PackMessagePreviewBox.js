import React, { useState } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import { Input, Select } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import useSearchSuggestions from "./UseSearchSuggestions";
import { useSelector } from "react-redux";
import CustomerSuggestions from "./CustomerSuggestions";

const PackMessagePreviewBox = ({
  selectedCustomer,
  setSelectedCustomer,
  onSendPackage,
}) => {
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
    <Card className=" w-3/12 flex flex-col">
      <div>
        <CardHeading className=" mb-4">Send Package</CardHeading>
        <Select placeholder="Select Package" size="sm">
          <option value={"123"}>123</option>
        </Select>
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <CardHeading className="mb-1 mt-5 text-sm">
          Send this package to
        </CardHeading>
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
        <div className=" flex-wrap  border border-gray-400 rounded-md p-3 overflow-auto first:mt-0 flex-1">
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
        <PrimaryButton
          type={"button"}
          content={"Send"}
          onClick={onSendPackage}
        />
      </div>
    </Card>
  );
};

export default PackMessagePreviewBox;
