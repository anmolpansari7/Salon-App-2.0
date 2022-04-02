import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./../container/Card";
import RadioButton from "./../custom_ui/RadioButton";
import {
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  useToast,
} from "@chakra-ui/react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import crossIcon from "./../../assets/cross_icon.svg";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { sendNewPackageData } from "../../store/package-actions";
import { useDispatch } from "react-redux";
import { packageIsValid } from "../../utils/package.utils";
import { v4 as uuidv4 } from "uuid";

const CreatePackageBox = ({ clearFilter }) => {
  const services = useSelector((state) => state.serviceList.services);
  const dispatch = useDispatch();
  const toast = useToast();

  const [packageName, setPackageName] = useState("");
  const [packageFor, setPackageFor] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [packageAmount, setPackageAmount] = useState(0);
  const [maxUsage, setMaxUsage] = useState(0);
  const [validFor, setValidFor] = useState("");

  const onCreatePackage = () => {
    const selectedServiceIds = selectedServices.map((service) => service._id);

    const newPackage = {
      gender: packageFor,
      name: packageName,
      services: selectedServiceIds,
      totalAmount: totalAmount,
      packageAmount: packageAmount,
      maxUsage: maxUsage,
      validFor: validFor,
    };

    if (!packageIsValid(newPackage, toast)) return;

    setMaxUsage(0);
    setPackageFor("");
    setPackageName("");
    setSelectedServices([]);
    setValidFor("");
    setTotalAmount(0);
    setPackageAmount(0);
    clearFilter();
    dispatch(sendNewPackageData(newPackage, toast));
  };

  const onItemSelection = (e) => {
    let currItemId = e.target.value;
    let selectedItem = services.find((service) => service._id === currItemId);
    selectedItem = {
      ...selectedItem,
      idx: uuidv4(),
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
            name={"gender"}
            for="pack-for"
            id="create-pack-male"
            val="M"
            label="Male"
            onChange={(e) => {
              setPackageFor(e.target.value);
            }}
          />
          <RadioButton
            name={"gender"}
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
          type={"text"}
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
        <div className=" flex flex-col space-y-3 h-40 border border-gray-400 rounded-md p-3 overflow-auto mb-3">
          {selectedServices.map((service) => (
            <ListItemDBtn
              key={service._id}
              content={service.name}
              content2={service.cost + " Rs."}
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
              {/* // Change to Input Number from chakra UI */}
              <NumberInput
                clampValueOnBlur={false}
                size="sm"
                width={"5rem"}
                marginRight={"1rem"}
                textAlign={"right"}
                value={packageAmount}
                onChange={(val) => {
                  setPackageAmount(val);
                }}
              >
                <NumberInputField size="sm" />
                <NumberInputStepper size="sm"></NumberInputStepper>
              </NumberInput>
              <p className=" self-end text-base font-medium"> Rs.</p>
            </div>
          </li>
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">
                Max Number of Usage{" "}
              </p>
              <NumberInput
                clampValueOnBlur={false}
                size="sm"
                width={"5rem"}
                textAlign={"right"}
                value={maxUsage}
                onChange={(val) => {
                  setMaxUsage(val);
                }}
              >
                <NumberInputField size="sm" />
                <NumberInputStepper size="sm"></NumberInputStepper>
              </NumberInput>
            </div>
          </li>
          <li className="flex justify-between border-b border-dashed border-black ">
            <div className=" flex justify-between flex-1">
              <p className=" font-medium flex-1 self-end">Valid For</p>
              <Select
                placeholder="Select Duration"
                size="sm"
                onChange={(e) => {
                  setValidFor(e.target.value);
                }}
                width={"10rem"}
              >
                <option value={"5Y"}>{"5 Year"}</option>
                <option value={"3Y"}>{"3 Year"}</option>
                <option value={"2Y"}>{"2 Year"}</option>
                <option value={"1Y"}>{"1 Year"}</option>
                <option value={"9M"}>{"9 Month"}</option>
                <option value={"6M"}>{"6 Month"}</option>
                <option value={"3M"}>{"3 Month"}</option>
              </Select>
            </div>
          </li>
        </div>
        <PrimaryButton content={"Create"} onClick={onCreatePackage} />
      </div>
    </Card>
  );
};

export default CreatePackageBox;
