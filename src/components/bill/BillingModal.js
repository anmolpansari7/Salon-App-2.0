import React, { useState, useEffect } from "react";
import Modal from "../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import SelectService from "./SelectService";
import SelectInventoryItem from "./SelectInventoryItem";
import TotalingDetails from "./TotalingDetails";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { getServicesData } from "../../store/services-actions";
import { getInventoryItems } from "../../store/inventory-item-actions";
import { getPointsCalculatorData } from "../../store/points-calculator-actions";
import { getAllActivePromocodes } from "../../store/promocode-actions";
import { validateNewOrder } from "../../utils/billing.utils";
import { MenuItemOption, useToast } from "@chakra-ui/react";
import { sendNewOrderData } from "../../store/order-actions";
import { updateCurrentCustomerData } from "../../store/current-customer-actions";

const BillingModal = ({ onHideBillingModal, customerId }) => {
  const toast = useToast();
  const dis = useDispatch();

  const branchId = useSelector((state) => state.authentication.branchId);
  const services = useSelector((state) => state.serviceList.services);
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
        Billing Section
      </CardHeading>
      <form className=" flex space-x-5">
        <div className=" h-[26rem] w-[18rem] flex flex-col justify-between">
          <SelectService
            listItems={services}
            placeholder={"Select Services"}
            selectedItems={selectedServices}
            setSelectedItems={setSelectedServices}
            setPromo={setPromo}
            setDiscountFromPromoCode={setDiscountFromPromoCode}
          />
          <SelectInventoryItem
            listItems={currentBranchInventoryItem}
            placeholder={"Select Inventory Items"}
            selectedItems={selectedInventoryItems}
            setSelectedItems={setSelectedInventoryItems}
            // updateCartValue={updateCartValue}
            onQuantityChange={onQuantityChange}
            setPromo={setPromo}
            setDiscountFromPromoCode={setDiscountFromPromoCode}
          />
        </div>
        <div className="h-[26rem] w-[20rem] flex flex-col justify-between">
          <TotalingDetails
            selectedServices={selectedServices}
            selectedInventoryItems={selectedInventoryItems}
            cartValue={cartValue}
            promo={promo}
            setPromo={setPromo}
            discountFromPromoCode={discountFromPromoCode}
            setDiscountFromPromoCode={setDiscountFromPromoCode}
            discountFromPoints={discountFromPoints}
            setDiscountFromPoints={setDiscountFromPoints}
            pointsUsed={pointsUsed}
            setPointsUsed={setPointsUsed}
            paidAmount={paidAmount}
            setPaidAmount={setPaidAmount}
            paymentMode={paymentMode}
            setPaymentMode={setPaymentMode}
            serviceGivenBy={serviceGivenBy}
            setServiceGivenBy={setServiceGivenBy}
            remark={remark}
            setRemark={setRemark}
          />
          <PrimaryButton
            type="button"
            content={"Proceed"}
            className={" mt-7"}
            onClick={onPlaceOrder}
          />
        </div>
      </form>
    </Modal>
  );
};

export default BillingModal;
