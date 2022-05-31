import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UsePointsInput = ({
  discountFromPoints,
  setDiscountFromPoints,
  pointsUsed,
  setPointsUsed,
}) => {
  const currCustomer = useSelector(
    (state) => state.currentCustomer.currentCustomer
  );

  const forPointsMale = useSelector(
    (state) => state.pointsCalculator.forPointsMale
  );
  const forPointsFemale = useSelector(
    (state) => state.pointsCalculator.forPointsFemale
  );
  const givenDiscountMale = useSelector(
    (state) => state.pointsCalculator.givenDiscountMale
  );
  const givenDiscountFemale = useSelector(
    (state) => state.pointsCalculator.givenDiscountFemale
  );
  const forPoints =
    currCustomer.gender === "M" ? forPointsMale : forPointsFemale;
  const givenDiscount =
    currCustomer.gender === "M" ? givenDiscountMale : givenDiscountFemale;

  const onPointsValueChange = (e) => {
    let currPointsValue = e.target.value;
    setPointsUsed(currPointsValue);

    let rupeePerPoint = givenDiscount / forPoints;
    let discountAmount = rupeePerPoint * currPointsValue;
    setDiscountFromPoints(discountAmount);
  };

  return (
    <div className="flex border-b border-dashed border-black justify-between pt-2">
      <p className="self-center">*** Use Points -</p>
      <p className=" self-center"> - {discountFromPoints} Rs.</p>
      <Input
        type={"number"}
        size={"xs"}
        width={"4rem"}
        textAlign={"right"}
        value={pointsUsed}
        onChange={onPointsValueChange}
      />
      <p className="self-center">Pts.</p>
    </div>
  );
};

export default UsePointsInput;
