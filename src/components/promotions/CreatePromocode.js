import React from "react";
import Card from "./../container/Card";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import RadioButton from "../custom_ui/RadioButton";
import PrimaryButton from "../custom_ui/PrimaryButton";

const CreatePromocode = () => {
  return (
    <Card className="flex-1 max-h-[36rem] overflow-auto flex flex-col space-y-3">
      <h1 className=" text-base border-b border-dashed border-black mb-2">
        Create Promocodes.
      </h1>
      <div className="flex">
        <p className=" text-sm w-48">Prom Code :</p>
        <Input type="text" placeholder="Enter New Promo Code" size="sm" />
      </div>
      <div className="flex justify-between">
        <p className=" text-sm w-48">Valid From :</p>
        <Input type="date" placeholder="" size="sm" />
      </div>
      <div className="flex justify-between">
        <p className=" text-sm w-48">Valid Till :</p>
        <Input type="date" placeholder="" size="sm" />
      </div>
      <h1 className=" text-sm font-medium border-b border-dashed border-black mb-5">
        Type :
      </h1>
      <div className="flex justify-between border-b border-black border-dashed">
        <RadioButton
          id="promo-discount-percentage"
          name="promo-discount-type"
          val="discount"
          label={"Discount in Percentage"}
        />
        <Input
          type="text"
          width={"10rem"}
          placeholder="%"
          size="sm"
          textAlign={"right"}
        />
      </div>
      <div className="flex justify-between border-b border-black border-dashed">
        <RadioButton
          id="promo-discount-rupee"
          name="promo-discount-type"
          val="rupee"
          label={"Discount in Rupees"}
        />
        <Input
          type="text"
          width={"10rem"}
          placeholder="Rs."
          size="sm"
          textAlign={"right"}
        />
      </div>
      <h1 className=" text-base border-b border-dashed border-black mt-5">
        Message Preview
      </h1>
      <Textarea height={"10rem"} maxHeight={"12rem"} />
      <PrimaryButton content={"send"} />
    </Card>
  );
};

export default CreatePromocode;
