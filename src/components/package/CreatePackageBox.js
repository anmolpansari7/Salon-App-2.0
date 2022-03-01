import React, { useState } from "react";
import { useSelector } from "react-redux";
import Card from "./../container/Card";
import RadioButton from "./../custom_ui/RadioButton";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import crossIcon from "./../../assets/cross_icon.svg";

const CreatePackageBox = () => {
  const services = useSelector((state) => state.serviceList.services);

  const [packageName, setPackageName] = useState("");
  const [packageFor, setPackageFor] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [paidAmount, setPaidAmount] = useState(0);
  const [maxUsage, setMaxUsage] = useState(0);
  const [validFrom, setValidFrom] = useState("");
  const [validUpto, setValidUpto] = useState("");

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
          />
          <RadioButton
            for="pack-for"
            id="create-pack-female"
            val="F"
            label="Female"
          />
        </div>
        {/* provide value */}
        <Input placeholder="Enter Package Name" size="sm" isRequired />
        <Select placeholder="Select Services for Package" size="sm">
          {services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.name}
            </option>
          ))}
        </Select>
        <p className=" text-sm text-gray-400">Selected Services - </p>
        <div className=" flex flex-col space-y-3 h-44 border border-gray-400 rounded-md p-3 overflow-auto mb-5">
          <ListItemDBtn
            content="Regular Haircut"
            content2={"150 Rs."}
            imageSrc={crossIcon}
            showBtn={true}
            buttonImgClass={"h-3"}
            className=" text-sm"
          />
          <ListItemDBtn
            content="Regular Haircut"
            content2={"150 Rs."}
            imageSrc={crossIcon}
            showBtn={true}
            buttonImgClass={"h-3"}
            className=" text-sm"
          />
          <ListItemDBtn
            content="Regular Haircut"
            content2={"150 Rs."}
            imageSrc={crossIcon}
            showBtn={true}
            buttonImgClass={"h-3"}
            className=" text-sm"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <ListItemDBtn
            content="Total"
            content2={"2050 Rs."}
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
              />
            </div>
          </li>
        </div>
      </div>
    </Card>
  );
};

export default CreatePackageBox;
