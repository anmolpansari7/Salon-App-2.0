import React from "react";
import { useSelector } from "react-redux";
import Card from "./../container/Card";
import RadioButton from "./../custom_ui/RadioButton";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import crossIcon from "./../../assets/cross_icon.svg";

const CreatePackageBox = ({
  packageName,
  setPackageName,
  setPackageFor,
  selectedServices,
  setSelectedServices,
  totalAmount,
  setTotalAmount,
  packageAmount,
  setPackageAmount,
  maxUsage,
  setMaxUsage,
  validFrom,
  setValidFrom,
  validUpto,
  setValidUpto,
}) => {
  const services = useSelector((state) => state.serviceList.services);

  const onItemSelection = (e) => {
    let currItemId = e.target.value;
    let selectedItem = services.find((service) => service._id === currItemId);
    selectedItem = {
      ...selectedItem,
      idx: selectedServices.length + Math.floor(Math.random() * 100),
    };
    setSelectedServices([...selectedServices, selectedItem]);
    selectedItem.cost === NaN
      ? setTotalAmount(totalAmount)
      : setTotalAmount((state) => state + selectedItem.cost);
  };

  const onItemDelete = (idx) => {
    let currItem = selectedServices.find((service) => service.idx === idx);
    let currList = selectedServices.filter((service) => service.idx !== idx);
    setSelectedServices(currList);
    setTotalAmount((state) => state - currItem.cost);
  };

  return (
    <Card className=" w-3/12 text-base flex flex-col">
      <h1 className=" text-lg border-b border-dashed border-black mb-5">
        Create Packages.
      </h1>
      <div className=" flex flex-col justify-between flex-1">
        <div className=" flex w-full justify-between">
          <p className=" text-sm">Package for</p>
          <RadioButton
            for="pack-for"
            id="create-pack-male"
            val="M"
            label="Male"
            onChange={(e) => {
              setPackageFor(e.target.value);
            }}
          />
          <RadioButton
            for="pack-for"
            id="create-pack-female"
            val="F"
            label="Female"
            onChange={(e) => {
              setPackageFor(e.target.value);
            }}
          />
        </div>
        {/* provide value */}
        <Input
          placeholder="Enter Package Name"
          size="sm"
          value={packageName}
          onChange={(e) => {
            setPackageName(e.target.value);
          }}
          isRequired
        />
        <Select
          placeholder="Select Services for Package"
          size="sm"
          onChange={onItemSelection}
        >
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </Select>
        <p className=" text-sm text-gray-400">Selected Services - </p>
        <div className=" flex flex-col space-y-3 h-44 border border-gray-400 rounded-md p-3 overflow-auto mb-5">
          {selectedServices.map((service) => (
            <ListItemDBtn
              content={service.name}
              content2={service.cost}
              imageSrc={crossIcon}
              showBtn={true}
              buttonImgClass={"h-3"}
              className=" text-sm"
              id={service.idx}
              onItemDelete={() => {
                onItemDelete(service.idx);
              }}
            />
          ))}
        </div>

        <div className="flex flex-col space-y-1">
          <ListItemDBtn
            content="Total"
            content2={totalAmount + " Rs."}
            showBtn={false}
            className=" font-medium text-base"
          />
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">Package Amount</p>
              <Input
                size="sm"
                type={"number"}
                width="32"
                placeholder="Amount"
                textAlign={"right"}
                value={packageAmount}
                onChange={(e) => {
                  setPackageAmount(e.target.value);
                }}
              />
              <p className=" self-end text-base font-medium"> Rs.</p>
            </div>
          </li>
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">
                Max Number of Usage{" "}
              </p>
              <Input
                size="sm"
                type={"number"}
                width="32"
                placeholder="How many ?"
                textAlign={"right"}
                value={maxUsage}
                onChange={(e) => {
                  setMaxUsage(e.target.value);
                }}
              />
            </div>
          </li>
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">Valid From</p>
              <Input
                size="sm"
                type={"date"}
                width="40"
                placeholder="How many ?"
                textAlign={"right"}
                value={validFrom}
                onChange={(e) => {
                  setValidFrom(e.target.value);
                }}
              />
            </div>
          </li>
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">Valid Upto </p>
              <Input
                size="sm"
                type={"date"}
                width="40"
                placeholder="How many ?"
                textAlign={"right"}
                value={validUpto}
                onChange={(e) => {
                  setValidUpto(e.target.value);
                }}
              />
            </div>
          </li>
        </div>
      </div>
    </Card>
  );
};

export default CreatePackageBox;
