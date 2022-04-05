import React, { useEffect } from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { getStaffList } from "../../store/staff-actions";
import { Input, Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const PackageBilling = ({ selectedPackage }) => {
  const dispatch = useDispatch();
  const staff = useSelector((state) => state.staff.staff);

  useEffect(() => {
    dispatch(getStaffList("", "", "", ""));
  }, [dispatch]);

  return (
    <div className="h-72 flex flex-col justify-evenly">
      <ListItemDBtn
        content={"Max Usage : "}
        content2={selectedPackage.maxUsage}
        showBtn={false}
        className={" font-medium pt-2"}
      />
      <ListItemDBtn
        content={"Actual Total Amount : "}
        content2={selectedPackage.totalAmount + " Rs."}
        showBtn={false}
        className={" font-medium pt-2"}
      />
      <ListItemDBtn
        content={"Package Amount : "}
        content2={selectedPackage.packageAmount + " Rs."}
        showBtn={false}
        className={" font-medium pt-2"}
      />
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end font-medium">Paid Amount -</p>
        <Input
          type="text"
          size="sm"
          width={"10rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"Paid Amount"}
        />
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className="self-end font-medium">Payment Mode -</p>
        <Select
          placeholder="Select Mode"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          width="11rem"
        >
          <option value="cash">Cash</option>
          <option value="upi">UPI</option>
          <option value="card">Card</option>
        </Select>
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end">Remark -</p>
        <Input
          type="text"
          size="sm"
          width={"10rem"}
          textAlign="right"
          border={"gray"}
          placeholder={"Add remark"}
        />
      </div>
      <div className=" flex justify-between border-b border-dashed border-black">
        <p className=" self-end">Service Given By -</p>
        <Select
          placeholder="Select Staff"
          fontSize={"0.875rem"}
          size={"sm"}
          alignSelf={"center"}
          width="11rem"
        >
          {staff.map((member) => (
            <option key={member._id} value={member._id}>
              {member.name}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default PackageBilling;
