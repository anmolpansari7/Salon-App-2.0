import React, { useState } from "react";
import Card from "./../container/Card";
import { Input, useToast } from "@chakra-ui/react";
import RadioButton from "../custom_ui/RadioButton";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch } from "react-redux";
import { sendNewPromoCodeData } from "../../store/promocode-actions";

const CreatePromocode = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [promoCode, setPromoCode] = useState("");
  const [validFrom, setValidFrom] = useState("");
  const [validTill, setValidTill] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [discountPercentageValue, setDiscountPercentageValue] = useState("");
  const [discountValue, setDiscountValue] = useState("");

  const onCreatePromoCode = () => {
    const newPromoCode = {
      promoCode: promoCode,
      validFrom: validFrom,
      validTill: validTill,
      discountType: discountType,
      discountValue: discountValue,
      discountPercentageValue: discountPercentageValue,
    };

    dispatch(sendNewPromoCodeData(newPromoCode, toast));

    setPromoCode("");
    setValidFrom("");
    setValidTill("");
    setDiscountType("");
    setDiscountValue("");
    setDiscountPercentageValue("");
  };

  return (
    <Card className="flex-1 max-h-[36rem] overflow-auto flex flex-col space-y-3">
      <h1 className=" text-base border-b border-dashed border-black mb-2">
        Create Promocodes.
      </h1>
      <div className="flex">
        <p className=" text-sm w-48">Prom Code :</p>
        <Input
          type="text"
          placeholder="Enter New Promo Code"
          size="sm"
          value={promoCode}
          onChange={(e) => {
            setPromoCode(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between">
        <p className=" text-sm w-48">Valid From :</p>
        <Input
          type="date"
          placeholder=""
          size="sm"
          value={validFrom}
          onChange={(e) => {
            setValidFrom(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between">
        <p className=" text-sm w-48">Valid Upto :</p>
        <Input
          type="date"
          placeholder=""
          size="sm"
          value={validTill}
          onChange={(e) => {
            setValidTill(e.target.value);
          }}
        />
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
          value={discountPercentageValue}
          onChange={(e) => {
            setDiscountPercentageValue(e.target.value);
          }}
        />
      </div>
      <div className="flex justify-between border-b border-black border-dashed">
        <RadioButton
          id="promo-discount-rupee"
          name="promo-discount-type"
          val="rupee"
          label={"Discount in Rupees"}
          onChange={(e) => {
            setDiscountType(e.target.value);
          }}
        />
        <Input
          type="text"
          width={"10rem"}
          placeholder="Rs."
          size="sm"
          textAlign={"right"}
          value={discountValue}
          onChange={(e) => {
            setDiscountValue(e.target.value);
          }}
        />
      </div>
      <PrimaryButton content={"Create"} onClick={onCreatePromoCode} />
    </Card>
  );
};

export default CreatePromocode;
