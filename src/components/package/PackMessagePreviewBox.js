import React, { useEffect, useState } from "react";
import Card from "../container/Card";
import CardHeading from "../custom_ui/CardHeading";
import { Input, Select, useToast } from "@chakra-ui/react";
import { Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";
import useSearchSuggestions from "./UseSearchSuggestions";
import { useDispatch, useSelector } from "react-redux";
import CustomerSuggestions from "./CustomerSuggestions";
import { getAllActivePackages } from "../../store/package-actions";
import PackageBilling from "./PackageBilling";

const initialSelectedPackage = {
  maxUsage: 0,
  packageAmount: 0,
  totalAmount: 0,
  validFor: "",
};

const PackMessagePreviewBox = ({ selectedCustomer, setSelectedCustomer }) => {
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  const [selectedPackageId, setSelectedPackageId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(
    initialSelectedPackage
  );
  const suggestedCustomers = useSelector((state) => state.packages.suggestions);
  const allActivePackages = useSelector(
    (state) => state.packages.allActivePackages
  );

  useSearchSuggestions(query);

  const onCustomerSelect = (customer) => {
    // for Single Customer
    setSelectedCustomer([customer]);
    setQuery("");
  };

  const onCustomerRemove = (customerId) => {
    let list = selectedCustomer.filter(
      (customer) => customer._id !== customerId
    );
    setSelectedCustomer(list);
  };

  const onPackageSelection = (e) => {
    const currPackId = e.target.value;
    const selectedPack = allActivePackages.find(
      (pack) => pack._id === currPackId
    );
    if (selectedPack === undefined) {
      setSelectedPackage(initialSelectedPackage);
    } else {
      setSelectedPackage(selectedPack);
    }
    setSelectedPackageId(currPackId);
  };

  useEffect(() => {
    dispatch(getAllActivePackages());
  }, []);

  return (
    <Card className=" w-3/12 flex flex-col">
      <div>
        <CardHeading className=" mb-4">Assign Package</CardHeading>
        <Select
          placeholder="Select Package"
          size="sm"
          onChange={onPackageSelection}
          value={selectedPackageId}
        >
          {allActivePackages.map((pack) => (
            <option key={pack._id} value={pack._id}>
              {pack.name}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex flex-col">
        <CardHeading className="mb-1 mt-5 text-sm">
          Send this package to
        </CardHeading>
        <div className="relative">
          <Input
            type={"text"}
            size={"sm"}
            placeholder={"Search Customers."}
            marginTop="0.50rem"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <CustomerSuggestions
            selectedPackageId={selectedPackageId}
            suggestedCustomers={suggestedCustomers}
            className={" absolute w-full max-h-56 overflow-auto z-10"}
            onCustomerSelect={onCustomerSelect}
          />
        </div>
        <p className=" text-sm text-gray-400 mt-2">
          Selected Customer - {selectedCustomer[0]?.name}
        </p>
        <PackageBilling
          selectedCustomerGender={selectedCustomer[0]?.gender}
          initialSelectedPackage={initialSelectedPackage}
          selectedPackage={selectedPackage}
          setSelectedPackage={setSelectedPackage}
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
          setSelectedPackageId={setSelectedPackageId}
        />
      </div>
    </Card>
  );
};

export default PackMessagePreviewBox;
