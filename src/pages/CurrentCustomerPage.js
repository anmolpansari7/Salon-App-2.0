import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PageContainer from "../components/container/PageContainer";
import CurrentCustomerActivePackage from "../components/customers/CurrentCustomerActivePackage";
import CurrentCustomerInfo from "../components/customers/CurrentCustomerInfo";
import CurrentCustomerOrders from "../components/customers/CurrentCustomerOrders";
import {
  getCurrentCustomerData,
  getCurrentCustomerOrders,
} from "../store/current-customer-actions";
import FloatingButton from "./../components/custom_ui/FloatingButton";
import BillingModal from "../components/bill/BillingModal";
import ClearDueModal from "../components/bill/ClearDueModal";

const CurrentCustomerPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);
  const [showBillingModal, setShowBillingModal] = useState(false);
  const [staffFilter, setStaffFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");
  const [showClearDueModal, setShowClearDueModal] = useState(false);

  const onShowBillingModal = () => {
    setShowBillingModal(true);
  };

  const onHideBillingModal = () => {
    setShowBillingModal(false);
  };

  const onShowClearDueModal = () => {
    setShowClearDueModal(true);
  };

  const onHideClearDueModal = () => {
    setShowClearDueModal(false);
  };

  useEffect(() => {
    dispatch(getCurrentCustomerData(id));
    dispatch(
      getCurrentCustomerOrders(id, staffFilter, startDateFilter, endDateFilter)
    );
  }, [dispatch, id, staffFilter, startDateFilter, endDateFilter]);

  return (
    <PageContainer>
      <div className="flex flex-col w-1/5 space-y-3">
        <CurrentCustomerInfo />
        <CurrentCustomerActivePackage customerId={id} />
      </div>
      <CurrentCustomerOrders
        staffFilter={staffFilter}
        setStaffFilter={setStaffFilter}
        startDateFilter={startDateFilter}
        setStartDateFilter={setStartDateFilter}
        endDateFilter={endDateFilter}
        setEndDateFilter={setEndDateFilter}
      />
      {isAuthOwner ? (
        <p
          className=" absolute bottom-6 right-10 text-center p-2 bg-slate-400 mt-3 text-white rounded-sm text-sm"
          title="Please Login as a Branch"
        >
          Order can be placed by branch only.
        </p>
      ) : (
        <>
          <FloatingButton
            content={"New Order"}
            className={" bottom-8 right-36 "}
            onClick={onShowBillingModal}
          />
          <FloatingButton
            content={"Clear Due"}
            className={" bottom-8 right-64 "}
            onClick={onShowClearDueModal}
          />
        </>
      )}
      {showBillingModal && (
        <BillingModal onHideBillingModal={onHideBillingModal} customerId={id} />
      )}
      {showClearDueModal && (
        <ClearDueModal
          onHideClearDueModal={onHideClearDueModal}
          customerId={id}
        />
      )}
    </PageContainer>
  );
};

export default CurrentCustomerPage;
