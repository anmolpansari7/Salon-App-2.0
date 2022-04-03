import React, { useState, useReducer, useEffect } from "react";
import Modal from "../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import SelectService from "./SelectService";
import ActivePackDetails from "./ActivePackDetails";
import TotalingDetails from "./TotalingDetails";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { getServicesData } from "../../store/services-actions";
import { getInventoryItems } from "../../store/inventory-item-actions";
import { getPointsCalculatorData } from "../../store/points-calculator-actions";
import { getAllActivePromocodes } from "../../store/promocode-actions";

const BillingModal = ({ onHideBillingModal }) => {
  const dis = useDispatch();

  const services = useSelector((state) => state.serviceList.services);
  const inventoryItems = useSelector((state) => state.inventory.inventoryItems);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);

  const [cartValue, setCartValue] = useState(0);
  const [discountFromPromoCode, setDiscountFromPromoCode] = useState(0);
  const [discountFromPoints, setDiscountFromPoints] = useState(0);

  const [promo, setPromo] = useState("");
  const [isUsingPackage, setIsUsingPackage] = useState(false);

  const [paidAmount, setPaidAmount] = useState(0);
  const [serviceGivenBy, setServiceGivenBy] = useState("");
  const [remark, setRemark] = useState("");

  useEffect(() => {
    dis(getServicesData());
    dis(getInventoryItems());
    dis(getPointsCalculatorData());
    dis(getAllActivePromocodes());
  }, [dis]);

  return (
    <Modal onHideModal={onHideBillingModal}>
      <form className=" flex space-x-5">
        <div className=" h-[36rem] w-[18rem] flex flex-col justify-between">
          <CardHeading className=" font-medium text-lg">
            Billing Section
          </CardHeading>
          <SelectService
            listItems={services}
            placeholder={"Select Services"}
            selectedItems={selectedServices}
            setSelectedItems={setSelectedServices}
            setCartValue={setCartValue}
            setPromo={setPromo}
            setDiscountFromPromoCode={setDiscountFromPromoCode}
          />
          <SelectService
            listItems={inventoryItems}
            placeholder={"Select Inventory Items"}
            selectedItems={selectedInventoryItems}
            setSelectedItems={setSelectedInventoryItems}
            setCartValue={setCartValue}
            setPromo={setPromo}
            setDiscountFromPromoCode={setDiscountFromPromoCode}
          />
        </div>
        <div className=" h-[36rem] w-[20rem] flex flex-col space-y-5">
          <ActivePackDetails />
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
          />
          <PrimaryButton type="button" content={"Proceed"} />
        </div>
      </form>
    </Modal>
  );
};

export default BillingModal;
