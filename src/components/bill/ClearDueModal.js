import React, { useState, useEffect } from "react";
import Modal from "../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { getServicesData } from "../../store/services-actions";
import { getInventoryItems } from "../../store/inventory-item-actions";
import { getPointsCalculatorData } from "../../store/points-calculator-actions";
import { getAllActivePromocodes } from "../../store/promocode-actions";
import { validateNewOrder } from "../../utils/billing.utils";
import { useToast } from "@chakra-ui/react";
import { sendNewOrderData } from "../../store/order-actions";
import { updateCurrentCustomerData } from "../../store/current-customer-actions";

const ClearDueModal = ({ onHideBillingModal, customerId }) => {
  const toast = useToast();
  const dis = useDispatch();

  const branchId = useSelector((state) => state.authentication.branchId);
  const forRupee = useSelector((state) => state.pointsCalculator.forRupee);
  const givenPoints = useSelector(
    (state) => state.pointsCalculator.givenPoints
  );
  const inventoryItems = useSelector((state) => state.inventory.inventoryItems);
  let currentBranchInventoryItem = [];
  inventoryItems.forEach((item) => {
    item.distributions.forEach((distribution) => {
      if (distribution.branchId === branchId) {
        currentBranchInventoryItem.push({
          ...item,
          maxQuantity: distribution.quantity,
        });
      }
    });
  });

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);

  const [cartValue, setCartValue] = useState(0);
  const [discountFromPromoCode, setDiscountFromPromoCode] = useState(0);
  const [discountFromPoints, setDiscountFromPoints] = useState(0);

  const [promo, setPromo] = useState("");
  const [pointsUsed, setPointsUsed] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");
  const [serviceGivenBy, setServiceGivenBy] = useState("");
  const [remark, setRemark] = useState("");
  const [render, setRender] = useState(false);

  const updateCartValue = () => {
    const items = [...selectedInventoryItems, ...selectedServices];
    let totalCost = 0;
    items.forEach((item) => {
      if (item.hasOwnProperty("quantity")) {
        totalCost += item.quantity * item.cost;
      } else {
        totalCost += item.cost;
      }
    });
    setCartValue(totalCost);
  };

  useEffect(
    () => updateCartValue(),
    [selectedInventoryItems, selectedServices, render]
  );

  const onPlaceOrder = () => {
    const totalAmount = cartValue - discountFromPoints - discountFromPromoCode;

    let pointsPerRupee = givenPoints / forRupee;
    const pointsEarned = Math.floor(totalAmount * pointsPerRupee);

    const selectedServiceIds = selectedServices.map((service) => service._id);
    const selectedInventoryItemIds = selectedInventoryItems.map((item) => {
      return {
        _id: item._id,
        quantity: item.quantity,
      };
    });

    const newOrder = {
      type: "order",
      branchId: branchId,
      customerId: customerId,
      serviceIds: selectedServiceIds,
      inventoryItemIds: selectedInventoryItemIds,
      totalAmount: totalAmount,
      paidAmount: paidAmount,
      paymentMode: paymentMode,
      remark: remark,
      pointsUsed: pointsUsed,
      pointsEarned: pointsEarned,
      discountGiven: discountFromPoints + discountFromPromoCode,
      promoCode: promo,
      packageId: "",
      servedBy: serviceGivenBy,
    };

    if (!validateNewOrder(newOrder, inventoryItems, branchId, toast)) {
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
    onHideBillingModal();
  };

  useEffect(() => {
    dis(getServicesData());
    dis(getInventoryItems());
    dis(getPointsCalculatorData());
    dis(getAllActivePromocodes());
  }, [dis]);

  const onQuantityChange = (id, quantity) => {
    if (quantity < 0) {
      quantity = 1;
    }
    let selectedItemIndex = selectedInventoryItems.findIndex(
      (item) => item._id === id
    );
    if (selectedInventoryItems[selectedItemIndex].maxQuantity >= quantity) {
      selectedInventoryItems[selectedItemIndex].quantity = quantity;
    } else {
      selectedInventoryItems[selectedItemIndex].quantity =
        selectedInventoryItems[selectedItemIndex].maxQuantity;
    }
    setRender((state) => !state);
    setSelectedInventoryItems(selectedInventoryItems);
  };

  return (
    <Modal onHideModal={onHideBillingModal}>
      <CardHeading className=" font-medium text-lg text-center">
        Clear Due -
      </CardHeading>
      <form className=" flex space-x-5">
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
            className={" mt-7"}
            onClick={onPlaceOrder}
          />
      </form>
    </Modal>

export default ClearDueModal;