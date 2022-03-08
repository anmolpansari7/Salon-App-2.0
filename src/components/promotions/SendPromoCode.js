import React from "react";
import Card from "../container/Card";
import CardHeading from "./../custom_ui/CardHeading";
import { Select } from "@chakra-ui/react";
import PrimaryButton from "../custom_ui/PrimaryButton";

const SendPromoCode = () => {
  return (
    <Card className={" mt-3 min-h-[12rem] flex flex-col justify-between"}>
      <CardHeading>Send Promo Codes</CardHeading>
      <Select placeholder="Select Promo Code" size="sm">
        <option key={1} value={123}>
          Hello
        </option>
      </Select>
      <PrimaryButton content={"Send"} />
    </Card>
  );
};

export default SendPromoCode;
