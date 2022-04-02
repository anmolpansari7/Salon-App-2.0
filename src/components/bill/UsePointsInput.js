import React, { useState } from "react";
import { Checkbox, Input } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const UsePointsInput = ({
  state,
  ACTIONS,
  dispatch,
  selectedServices,
  selectedInventoryItems,
}) => {
  const forPoints = useSelector((state) => state.pointsCalculator.forPoints);
  const givenDiscount = useSelector(
    (state) => state.pointsCalculator.givenDiscount
  );

  const [pointsUsed, setPointsUsed] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const onPointsValueChange = (e) => {
    let currPointsValue = e.target.value;

    setPointsUsed(currPointsValue);
    let totalServiceAmount = selectedServices.reduce(
      (total, item) => item.cost + total,
      0
    );

    let totalInventoryAmount = selectedInventoryItems.reduce(
      (total, item) => item.cost + total,
      0
    );

    const totalAmount = totalServiceAmount + totalInventoryAmount;

    let rupeePerPoint = givenDiscount / forPoints;
    let discountAmount = rupeePerPoint * currPointsValue;

    if (isChecked) {
      dispatch({
        type: ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED,
        payload: {
          totalAmount: totalAmount,
          discountFromPoints: discountAmount,
        },
      });
    } else {
      dispatch({
        type: ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED,
        payload: {
          totalAmount: totalAmount,
          discountFromPoints: discountAmount,
        },
      });
    }
  };

  const onUsePointCheck = (e) => {
    let status = e.target.checked;
    setIsChecked(status);

    let totalServiceAmount = selectedServices.reduce(
      (total, item) => item.cost + total,
      0
    );

    let totalInventoryAmount = selectedInventoryItems.reduce(
      (total, item) => item.cost + total,
      0
    );

    const totalAmount = totalServiceAmount + totalInventoryAmount;

    if (status) {
      dispatch({
        type: ACTIONS.CHECK_BOX_CHECKED,
        payload: { totalAmount: totalAmount },
      });
    } else {
      dispatch({
        type: ACTIONS.CHECK_BOX_UNCHECKED,
        payload: { totalAmount: totalAmount },
      });
    }
  };

  return (
    <div className="flex border-b border-dashed border-black justify-between pt-2">
      <p className="self-center">*** Use Points -</p>
      <Checkbox onChange={onUsePointCheck} />
      <p className=" self-center"> - {state.discountFromPoints} Rs.</p>
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
