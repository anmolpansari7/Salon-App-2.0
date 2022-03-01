import React, { useState, useReducer } from "react";
import Modal from "../custom_ui/Modal";
import CardHeading from "../custom_ui/CardHeading";
import SelectService from "./SelectService";
import ActivePackDetails from "./ActivePackDetails";
import TotalingDetails from "./TotalingDetails";
import PrimaryButton from "../custom_ui/PrimaryButton";

const BillingModal = ({ onHideBillingModal }) => {
  const [selectedService, setSelectedService] = useState([]);
  const [selectedInventoryItem, setSelectedInventoryItem] = useState([]);
  const [isUsingPoints, setIsUsingPoints] = useState(false);
  const [usedPointsValue, setUsedPointsValue] = useState(0);
  const [isUsingPackage, setIsUsingPackage] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [paidAmount, setPaidAmount] = useState(0);
  const [serviceGivenBy, setServiceGivenBy] = useState("");
  const [remark, setRemark] = useState("");

  const [state, dispatch] = useReducer(reducer, {
    totalAmount: 0,
    discountAmount: 0,
  });

  const ACTIONS = {
    ITEM_ADDED: "item-added",
    ITEM_REMOVED: "item-removed",
    CHECK_BOX_CHECKED: "check-box-checked",
    CHECK_BOX_UNCHECKED: "check-box-unchecked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
      "use-points-value-change-with-checkbox-checked",
    USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
      "use-points-value-change-with-checkbox-unchecked",
  };

  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.ITEM_ADDED:
        return {
          totalAmount: state.totalAmount + action.payload.amount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.ITEM_REMOVED:
        return {
          totalAmount: state.totalAmount - action.payload.amount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.CHECK_BOX_CHECKED:
        return {
          totalAmount: state.totalAmount - state.discountAmount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.CHECK_BOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount,
          discountAmount: state.discountAmount,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_CHECKED:
        return {
          totalAmount:
            action.payload.totalAmount - action.payload.discountAmount,
          discountAmount: action.payload.discountAmount,
        };
      case ACTIONS.USE_POINTS_VALUE_CHANGE_WITH_CHECKBOX_UNCHECKED:
        return {
          totalAmount: action.payload.totalAmount,
          discountAmount: action.payload.discountAmount,
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

  return (
    <Modal onHideModal={onHideBillingModal}>
      <form className=" flex space-x-5">
        <div className=" h-[36rem] w-[18rem] flex flex-col justify-between">
          <CardHeading className=" font-medium text-lg">
            Billing Section
          </CardHeading>
          <SelectService />
          <SelectService />
        </div>
        <div className=" h-[36rem] w-[20rem] flex flex-col space-y-5">
          <ActivePackDetails />
          <TotalingDetails />
          <PrimaryButton type="button" content={"Proceed"} />
        </div>
      </form>
    </Modal>
  );
};

export default BillingModal;
