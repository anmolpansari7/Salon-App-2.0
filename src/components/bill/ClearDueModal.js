import React, { useState } from "react";
import Modal from "../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { validClearDue } from "../../utils/billing.utils";
import { Input, Select, useToast } from "@chakra-ui/react";
import { sendNewOrderData } from "../../store/order-actions";
import { updateCurrentCustomerData } from "../../store/current-customer-actions";

const ClearDueModal = ({ onHideClearDueModal, customerId }) => {
  const toast = useToast();
  const dis = useDispatch();

  const staff = useSelector((state) => state.staff.staff);
  const branchId = useSelector((state) => state.authentication.branchId);
  const [paidAmount, setPaidAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");
  const [serviceGivenBy, setServiceGivenBy] = useState("");
  const [remark, setRemark] = useState("");

  const onPlaceOrder = () => {
    const newOrder = {
      type: "clear-due",
      branchId: branchId,
      customerId: customerId,
      serviceIds: [],
      inventoryItemIds: [],
      totalAmount: 0,
      paidAmount: paidAmount,
      paymentMode: paymentMode,
      remark: remark,
      pointsUsed: 0,
      pointsEarned: 0,
      discountGiven: 0,
      promoCode: "",
      packageId: "",
      servedBy: serviceGivenBy,
    };

    if (!validClearDue(newOrder, branchId, toast)) {
      return;
    }

    dis(sendNewOrderData(newOrder, toast));
    dis(
      updateCurrentCustomerData(
        newOrder.customerId,
        newOrder.pointsEarned,
        newOrder.totalAmount - newOrder.paidAmount
      )
    );
    onHideClearDueModal();
  };

  return (
    <Modal onHideModal={onHideClearDueModal}>
      <CardHeading className=" font-medium text-lg text-center">
        Clear Due -
      </CardHeading>
      <form className=" space-y-1">
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
        <PrimaryButton
          type="button"
          content={"Proceed"}
          className={""}
          onClick={onPlaceOrder}
        />
      </form>
    </Modal>
  );
};

export default ClearDueModal;
