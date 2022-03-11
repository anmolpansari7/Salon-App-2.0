import React, { useEffect } from "react";
import Card from "../container/Card";
import CardHeading from "./../custom_ui/CardHeading";
import { Select } from "@chakra-ui/react";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { getAllActivePromocodes } from "../../store/promocode-actions";
import { useDispatch, useSelector } from "react-redux";

const SendPromoCode = () => {
  const dispatch = useDispatch();

  const allActivePromoCodes = useSelector(
    (state) => state.promocodes.allActivePromoCodes
  );

  useEffect(() => {
    dispatch(getAllActivePromocodes());
  }, [dispatch]);

  return (
    <Card className={" mt-3 min-h-[12rem] flex flex-col justify-between"}>
      <CardHeading>Send Promo Codes</CardHeading>
      <Select placeholder="Select Promo Code" size="sm">
        {allActivePromoCodes.map((promo) => (
          <option key={promo._id} value={promo._id}>
            {promo.promoCode}
          </option>
        ))}
      </Select>
      <PrimaryButton content={"Send"} />
    </Card>
  );
};

export default SendPromoCode;
