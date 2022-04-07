import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageContainer from "../components/container/PageContainer";
import CurrentCustomerActivePackage from "../components/customers/CurrentCustomerActivePackage";
import CurrentCustomerInfo from "../components/customers/CurrentCustomerInfo";
import CurrentCustomerOrders from "../components/customers/CurrentCustomerOrders";
import { getCurrentCustomerData } from "../store/current-customer-actions";
import FloatingButton from "./../components/custom_ui/FloatingButton";
import BillingModal from "../components/bill/BillingModal";

const CurrentCustomerPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [showBillingModal, setShowBillingModal] = useState(false);

  const onShowBillingModal = () => {
    setShowBillingModal(true);
  };

  const onHideBillingModal = () => {
    setShowBillingModal(false);
  };

  useEffect(() => {
    dispatch(getCurrentCustomerData(id));
  }, [dispatch, id]);

  return (
    <PageContainer>
      <div className="flex flex-col w-1/5 space-y-3">
        <CurrentCustomerInfo />
        <CurrentCustomerActivePackage customerId={id} />
      </div>
      <CurrentCustomerOrders />
      <FloatingButton
        content={"New Order"}
        className={" bottom-8 right-12 "}
        onClick={onShowBillingModal}
      />
      {showBillingModal && (
        <BillingModal onHideBillingModal={onHideBillingModal} customerId={id} />
      )}
    </PageContainer>
  );
};

export default CurrentCustomerPage;
