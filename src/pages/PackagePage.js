import React, { useEffect, useState } from "react";
import PageContainer from "../components/container/PageContainer";
import CreatePackageBox from "../components/package/CreatePackageBox";
import PackMessagePreviewBox from "../components/package/PackMessagePreviewBox";
import PreviousPackagesBox from "../components/package/PreviousPackagesBox";

import { getServicesData } from "../store/services-actions";
import { useDispatch } from "react-redux";

const PackagePage = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState([]);

  const [statusFilter, setStatusFilter] = useState("");
  const [startDateFilter, setStartDateFilter] = useState("");
  const [endDateFilter, setEndDateFilter] = useState("");

  const selectedCustomerIds = selectedCustomer.map((customer) => customer._id);

  const clearFilter = () => {
    setStatusFilter("");
    setStartDateFilter("");
    setEndDateFilter("");
  };

  useEffect(() => {
    dispatch(getServicesData());
  });

  return (
    <PageContainer>
      <CreatePackageBox clearFilter={clearFilter} />
      <PackMessagePreviewBox
        message={message}
        setMessage={setMessage}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        onSendPackage={() => {}}
      />
      <PreviousPackagesBox
        statusFilter={statusFilter}
        startDateFilter={startDateFilter}
        endDateFilter={endDateFilter}
        setStatusFilter={setStatusFilter}
        setStartDateFilter={setStartDateFilter}
        setEndDateFilter={setEndDateFilter}
      />
    </PageContainer>
  );
};

export default PackagePage;
