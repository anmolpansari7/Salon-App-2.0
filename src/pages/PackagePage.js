import React, { useState } from "react";
import PageContainer from "../components/container/PageContainer";
import CreatePackageBox from "../components/package/CreatePackageBox";
import PackMessagePreviewBox from "../components/package/PackMessagePreviewBox";
import PreviousPackagesBox from "../components/package/PreviousPackagesBox";

const PackagePage = () => {
  const [packageName, setPackageName] = useState("");
  const [packageFor, setPackageFor] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [packageAmount, setPackageAmount] = useState(0);
  const [maxUsage, setMaxUsage] = useState(0);
  const [validFrom, setValidFrom] = useState("");
  const [validUpto, setValidUpto] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState([]);

  const onSendPackage = () => {
    const selectedServiceIds = selectedServices.map((service) => service._id);
    const selectedCustomerIds = selectedCustomer.map(
      (customer) => customer._id
    );

    const newPackage = {
      gender: packageFor,
      name: packageName,
      selectedServices: selectedServiceIds,
      totalAmount: totalAmount,
      packageAmount: packageAmount,
      maxUsage: maxUsage,
      validFrom: validFrom,
      validUpto: validUpto,
      messaage: message,
      selectedCustomer: selectedCustomerIds,
    };

    setMaxUsage("");
    setPackageFor("");
    setPackageName("");
    setSelectedCustomer([]);
    setSelectedServices([]);
    setMessage("");
    setValidFrom("");
    setValidUpto("");
    setTotalAmount(0);
    setPackageAmount("");
    console.log(newPackage);
  };

  return (
    <PageContainer>
      <CreatePackageBox
        packageName={packageName}
        setPackageName={setPackageName}
        packageFor={packageFor}
        setPackageFor={setPackageFor}
        selectedServices={selectedServices}
        setSelectedServices={setSelectedServices}
        totalAmount={totalAmount}
        setTotalAmount={setTotalAmount}
        packageAmount={packageAmount}
        setPackageAmount={setPackageAmount}
        maxUsage={maxUsage}
        setMaxUsage={setMaxUsage}
        validFrom={validFrom}
        setValidFrom={setValidFrom}
        validUpto={validUpto}
        setValidUpto={setValidUpto}
      />
      <PackMessagePreviewBox
        message={message}
        setMessage={setMessage}
        selectedCustomer={selectedCustomer}
        setSelectedCustomer={setSelectedCustomer}
        onSendPackage={onSendPackage}
      />
      <PreviousPackagesBox />
    </PageContainer>
  );
};

export default PackagePage;
