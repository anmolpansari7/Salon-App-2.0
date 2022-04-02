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
import { getStaffList } from "../../store/staff-actions";
import { getPointsCalculatorData } from "../../store/points-calculator-actions";
import { getAllActivePromocodes } from "../../store/promocode-actions";

const getTotal = (selectedServices, selectedInventoryItems) => {
  let totalServiceAmount = selectedServices.reduce(
    (total, item) => item.cost + total,
    0
  );

  let totalInventoryAmount = selectedInventoryItems.reduce(
    (total, item) => item.cost + total,
    0
  );

  const totalAmount = totalServiceAmount + totalInventoryAmount;
  return totalAmount;
};

const BillingModal = ({ onHideBillingModal }) => {
  const dis = useDispatch();

  const services = useSelector((state) => state.serviceList.services);
  const inventoryItems = useSelector((state) => state.inventory.inventoryItems);

  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedInventoryItems, setSelectedInventoryItems] = useState([]);
  const [isUsingPoints, setIsUsingPoints] = useState(false);
  const [usedPointsValue, setUsedPointsValue] = useState(0);
  const [isUsingPackage, setIsUsingPackage] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);
  const [serviceGivenBy, setServiceGivenBy] = useState("");
  const [remark, setRemark] = useState("");

  const ACTIONS = {
    ITEM_ADDED: "item-added",
    ITEM_REMOVED: "item-removed",
    CHECK_BOX_CHECKED: "check-box-checked",
    CHECK_BOX_UNCHECKED: "check-box-unchecked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
      "use-points-value-change-with-checkbox-checked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
      "use-points-value-change-with-checkbox-unchecked",
    VALID_PROMOCODE: "valid-promo-code",
    INVALID_PROMOCODE: "invalid-promo-code",
  };

  const [state, dispatch] = useReducer(reducer, {
    totalAmount: 0,
    discountFromPackage: 0,
    discountFromPromoCode: 0,
    discountFromPoints: 0,
  });

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ITEM_ADDED:
        let total = getTotal(selectedServices, selectedInventoryItems);
        return {
          totalAmount:
            total - state.discountFromPoints - state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: state.discountFromPoints,
        };
      case ACTIONS.ITEM_REMOVED:
        let Amount = getTotal(selectedServices, selectedInventoryItems);
        return {
          totalAmount:
            Amount - state.discountFromPoints - state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: state.discountFromPoints,
        };
      case ACTIONS.CHECK_BOX_CHECKED:
        return {
          totalAmount:
            action.payload.totalAmount -
            state.discountFromPoints -
            state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: state.discountFromPoints,
        };
      case ACTIONS.CHECK_BOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount - state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: state.discountFromPoints,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
        return {
          totalAmount:
            action.payload.totalAmount -
            action.payload.discountFromPoints -
            state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: action.payload.discountFromPoints,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount - state.discountFromPromoCode,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: state.discountFromPromoCode,
          discountFromPoints: action.payload.discountFromPoints,
        };
      case ACTIONS.VALID_PROMOCODE:
        return {
          totalAmount:
            action.payload.totalAmount -
            action.payload.discountFromPromoCode -
            state.discountFromPoints,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: action.payload.discountFromPromoCode,
          discountFromPoints: state.discountFromPoints,
        };

      case ACTIONS.INVALID_PROMOCODE:
        return {
          totalAmount: action.payload.totalAmount - state.discountFromPoints,
          discountFromPackage: state.discountFromPackage,
          discountFromPromoCode: 0,
          discountFromPoints: state.discountFromPoints,
        };

      default:
        return state;
    }
  }

  // TODO - Continue from here

  // const onItemSelection = (e) => {
  //   const selectedItemId = e.target.value;
  //   let selectedItem = combineList.find((item) => item._id === selectedItemId);
  //   selectedItem = { ...selectedItem, id: nanoid() };
  //   setSelectedItems([...selectedItems, selectedItem]);
  //   dispatch({
  //     type: ACTIONS.ITEM_ADDED,
  //     payload: { amount: selectedItem.cost },
  //   });
  // };

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
            ACTIONS={ACTIONS}
            dispatch={dispatch}
            selectedItems={selectedServices}
            setSelectedItems={setSelectedServices}
          />
          <SelectService
            listItems={inventoryItems}
            placeholder={"Select Inventory Items"}
            ACTIONS={ACTIONS}
            dispatch={dispatch}
            selectedItems={selectedInventoryItems}
            setSelectedItems={setSelectedInventoryItems}
          />
        </div>
        <div className=" h-[36rem] w-[20rem] flex flex-col space-y-5">
          <ActivePackDetails />
          <TotalingDetails
            state={state}
            ACTIONS={ACTIONS}
            dispatch={dispatch}
            selectedServices={selectedServices}
            selectedInventoryItems={selectedInventoryItems}
          />
          <PrimaryButton type="button" content={"Proceed"} />
        </div>
      </form>
    </Modal>
  );
};

export default BillingModal;
