import React, { useState } from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { Input, Select } from "@chakra-ui/react";
import UsePointsInput from "./UsePointsInput";
import { useSelector } from "react-redux";

const TotalingDetails = ({
  state,
  ACTIONS,
  dispatch,
  selectedServices,
  selectedInventoryItems,
}) => {
  const staff = useSelector((state) => state.staff.staff);
  const activePromos = useSelector(
    (state) => state.promocodes.allActivePromoCodes
  );

  const [promo, setPromo] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onPromoValChange = (e) => {
    const currPromo = e.target.value;
    setPromo(currPromo);
    let validPromo = activePromos.find((code) => code.promoCode === currPromo);
    // console.log(validPromo);

    let totalServiceAmount = selectedServices.reduce(
      (total, item) => item.cost + total,
      0
    );

    let totalInventoryAmount = selectedInventoryItems.reduce(
      (total, item) => item.cost + total,
      0
    );

    const totalAmount = totalServiceAmount + totalInventoryAmount;
    let discountAmount = 0;

    if (validPromo && validPromo.discountType === "rupee") {
      discountAmount = validPromo.discountValue;
    } else if (validPromo && validPromo.discountType === "percentage") {
      discountAmount = Math.floor((50 / 100) * totalAmount);
    }

    if (validPromo) {
      setIsValid(true);
      dispatch({
        type: ACTIONS.VALID_PROMOCODE,
        payload: {
          totalAmount: totalAmount,
          discountFromPromoCode: discountAmount,
        },
      });
    } else {
      setIsValid(false);
      dispatch({
        type: ACTIONS.INVALID_PROMOCODE,
        payload: { totalAmount: totalAmount },
      });
    }
  };

  return (
    <div className=" flex flex-col space-y-2">
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end mr-3">Promo Code</p>
        <p className=" self-end"> - {state.discountFromPromoCode} Rs.</p>
        <Input
          type="text"
          size="sm"
          width={"10rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"PROMO CODE"}
          value={promo}
          onChange={onPromoValChange}
        />
      </div>
      <UsePointsInput
        state={state}
        ACTIONS={ACTIONS}
        dispatch={dispatch}
        selectedServices={selectedServices}
        selectedInventoryItems={selectedInventoryItems}
      />
      <ListItemDBtn
        content={"Total Amount"}
        content2={state.totalAmount + " Rs."}
        showBtn={false}
        className={" font-medium pt-2"}
      />
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end font-medium">Paid Amount -</p>
        <Input
          type="text"
          size="sm"
          width={"10rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"Paid Amount"}
        />
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className="self-end font-medium">Payment Mode -</p>
        <Select
          placeholder="Select Mode"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          width="11rem"
        >
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="card">Card</option>
        </Select>
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end">Remark -</p>
        <Input
          type="text"
          size="sm"
          width={"10rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"Add remark"}
        />
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end">Service Given By -</p>
        <Select
          placeholder="Select Staff"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          width="11rem"
        >
          {staff.map((member) => (
            <option key={member._id} value={member._id}>
              {member.name}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default TotalingDetails;
