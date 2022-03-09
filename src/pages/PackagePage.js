import React, { useState } from "react";
import PageContainer from "../components/container/PageContainer";
import CreatePackageBox from "../components/package/CreatePackageBox";
import PackMessagePreviewBox from "../components/package/PackMessagePreviewBox";
import PreviousPackagesBox from "../components/package/PreviousPackagesBox";

const PackagePage = () => {
  const [message, setMessage] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState([]);
  const selectedCustomerIds = selectedCustomer.map((customer) => customer._id);

  return (
    <PageContainer>
      <CreatePackageBox />
      <PackMessagePreviewBox
        message={message}
        setMessage={setMessage}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        onSendPackage={() => {}}
      />
      <PreviousPackagesBox />
    </PageContainer>
  );
};

export default PackagePage;
