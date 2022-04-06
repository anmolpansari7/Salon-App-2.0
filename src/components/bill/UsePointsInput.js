import React, { useState } from "react";
import { Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UsePointsInput = ({
  discountFromPoints,
  setDiscountFromPoints,
  pointsUsed,
  setPointsUsed,
}) => {
  const forPoints = useSelector((state) => state.pointsCalculator.forPoints);
  const givenDiscount = useSelector(
    (state) => state.pointsCalculator.givenDiscount
  );

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
