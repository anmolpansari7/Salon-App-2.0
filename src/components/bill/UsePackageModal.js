import { Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardHeading from "../custom_ui/CardHeading";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import Modal from "../custom_ui/Modal";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { Tag, useToast } from "@chakra-ui/react";
import { validatePackageUsageOrder } from "../../utils/package.utils";
import { sendNewOrderData } from "../../store/order-actions";

const UsePackageModal = ({ onHideModal, selectedPack, customerId }) => {
  const toast = useToast();
  const dispatch = useDispatch();

  const branchId = useSelector((state) => state.authentication.branchId);
  const staff = useSelector((state) => state.staff.staff);
  // console.log(selectedPack);

  const [remark, setRemark] = useState("");
  const [servedBy, setServedBy] = useState("");

  const onUsePackage = () => {
    const newOrder = {
      type: "package-usage",
      branchId: branchId,
      customerId: customerId,
      serviceIds: [],
      inventoryItemIds: [],
      totalAmount: 0,
      paidAmount: 0,
      paymentMode: "pre-paid",
      remark: remark,
      pointsUsed: 0,
      pointsEarned: 0,
      discountGiven: 0,
      promoCode: "",
      packageId: selectedPack.packageId,
      servedBy: servedBy,
    };

    if (!validatePackageUsageOrder(newOrder, toast)) {
      return;
    }

    dispatch(sendNewOrderData(newOrder, toast));
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <CardHeading className=" font-medium text-lg">
        Use - {selectedPack.packageName}
      </CardHeading>
      <div className=" flex flex-wrap space-x-3 mb-3">
        <h1> Services : </h1>
        {selectedPack.serviceNames.map((service) => (
          <Tag>{service}</Tag>
        ))}
      </div>
      <div className="flex flex-col space-y-1 mb-3">
        <ListItemDBtn
          content={"Usage Left :"}
          content2={selectedPack.UsageLeft}
          showBtn={false}
          className={" font-normal pt-2"}
        />
        <ListItemDBtn
          content={"Usage Left After this :"}
          content2={selectedPack.UsageLeft - 1}
          showBtn={false}
          className={" font-normal pt-2"}
        />
        <div className=" flex justify-between border-b border-dashed border-black">
          <p className=" self-end">Remark -</p>
          <Input
            type="text"
            size="sm"
            width={"10rem"}
            textAlign="right"
            border={"gray"}
            placeholder={"Add remark"}
            value={remark}
            onChange={(e) => {
              setRemark(e.target.value);
            }}
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
            value={servedBy}
            onChange={(e) => {
              setServedBy(e.target.value);
            }}
          >
            {staff.map((member) => (
              <option key={member._id} value={member._id}>
                {member.name}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <PrimaryButton
        type={"button"}
        content={"Use Pack"}
        onClick={onUsePackage}
      />
    </Modal>
  );
};

export default UsePackageModal;
