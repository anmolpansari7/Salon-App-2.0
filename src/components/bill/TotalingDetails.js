import React, { useState } from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { Input, Select } from "@chakra-ui/react";
import UsePointsInput from "./UsePointsInput";
import { useSelector } from "react-redux";

const TotalingDetails = ({
  selectedServices,
  selectedInventoryItems,
  cartValue,
  promo,
  setPromo,
  discountFromPromoCode,
  setDiscountFromPromoCode,
  discountFromPoints,
  setDiscountFromPoints,
  pointsUsed,
  setPointsUsed,
  paidAmount,
  setPaidAmount,
  paymentMode,
  setPaymentMode,
  serviceGivenBy,
  setServiceGivenBy,
  remark,
  setRemark,
}) => {
  const staff = useSelector((state) => state.staff.staff);
  const activePromos = useSelector(
    (state) => state.promocodes.allActivePromoCodes
  );

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
      setDiscountFromPromoCode(discountAmount);
    } else if (validPromo && validPromo.discountType === "percentage") {
      discountAmount = Math.floor((50 / 100) * totalAmount);
      setDiscountFromPromoCode(discountAmount);
    } else {
      setDiscountFromPromoCode(0);
    }
  };

  return (
    <div className=" flex flex-col justify-between flex-1">
      <ListItemDBtn
        content={"Cart Value"}
        content2={cartValue + " Rs."}
        showBtn={false}
        className={" font-medium pt-2"}
      />
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end mr-3">Promo Code</p>
        <p className=" self-end"> - {discountFromPromoCode} Rs.</p>
        <Input
          type="text"
          size="sm"
          width={"8rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"PROMO CODE"}
          value={promo}
          onChange={onPromoValChange}
        />
      </div>
      <UsePointsInput
        discountFromPoints={discountFromPoints}
        setDiscountFromPoints={setDiscountFromPoints}
        pointsUsed={pointsUsed}
        setPointsUsed={setPointsUsed}
      />
      <ListItemDBtn
        content={"Amount to be Paid"}
        content2={
          cartValue - discountFromPromoCode - discountFromPoints + " Rs."
        }
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
          value={paidAmount}
          onChange={(e) => {
            setPaidAmount(e.target.value);
          }}
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
          value={paymentMode}
          onChange={(e) => {
            setPaymentMode(e.target.value);
          }}
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
          value={remark}
          onChange={(e) => {
            setRemark(e.target.value);
          }}
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
          value={serviceGivenBy}
          onChange={(e) => {
            setServiceGivenBy(e.target.value);
          }}
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
