import React, { useEffect, useState } from "react";
import ListItemDBtn from "../custom_ui/ListItemDBtn";
import { getStaffList } from "../../store/staff-actions";
import { Input, Select, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { validatePackageAssignOrder } from "../../utils/package.utils";
import { sendNewOrderData } from "../../store/order-actions";
import { assignPackage } from "../../store/package-actions";
import { updateCurrentCustomerData } from "../../store/current-customer-actions";

const PackageBilling = ({
  selectedCustomerGender,
  initialSelectedPackage,
  selectedPackage,
  setSelectedPackage,
  selectedCustomer,
  setSelectedCustomer,
  setSelectedPackageId,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const branchId = useSelector((state) => state.authentication.branchId);
  const isAuthOwner = useSelector((state) => state.authentication.isAuthOwner);
  const staff = useSelector((state) => state.staff.staff);

  const [paidAmount, setPaidAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState("");
  const [remark, setRemark] = useState("");
  const [servedBy, setServedBy] = useState("");

  const forRupeeMale = useSelector(
    (state) => state.pointsCalculator.forRupeeMale
  );
  const forRupeeFemale = useSelector(
    (state) => state.pointsCalculator.forRupeeFemale
  );
  const givenPointsMale = useSelector(
    (state) => state.pointsCalculator.givenPointsMale
  );
  const givenPointsFemale = useSelector(
    (state) => state.pointsCalculator.givenPointsFemale
  );

  useEffect(() => {
    dispatch(getStaffList("", "", "", ""));
  }, [dispatch]);

  const onSendPackage = () => {
    // dispatch(assignPackage(selectedCustomer, selectedPackage[0], toast));

    const forRupee =
      selectedCustomerGender === "M" ? forRupeeMale : forRupeeFemale;
    const givenPoints =
      selectedCustomerGender === "M" ? givenPointsMale : givenPointsFemale;

    let pointsPerRupee = givenPoints / forRupee;
    const pointsEarned = Math.floor(
      selectedPackage.packageAmount * pointsPerRupee
    );

    const newOrder = {
      type: "package-assign",
      branchId: branchId,
      customerId: selectedCustomer[0]._id,
      serviceIds: [],
      inventoryItemIds: [],
      totalAmount: selectedPackage.packageAmount,
      paidAmount: paidAmount,
      paymentMode: paymentMode,
      remark: remark,
      pointsUsed: 0,
      pointsEarned: pointsEarned,
      discountGiven: 0,
      promoCode: "",
      packageId: selectedPackage._id,
      servedBy: servedBy,
    };

    if (!validatePackageAssignOrder(newOrder, selectedPackage, toast)) {
      return;
    }

    // dispatch(sendNewOrderData(newOrder, toast));
    // dispatch(assignPackage(selectedCustomer[0]._id, selectedPackage, toast));
    // dispatch(
    //   updateCurrentCustomerData(
    //     newOrder.customerId,
    //     newOrder.pointsEarned,
    //     newOrder.totalAmount - newOrder.paidAmount
    //   )
    // );

    setSelectedCustomer([]);
    setSelectedPackageId("");
    setPaidAmount(0);
    setPaymentMode("");
    setRemark("");
    setServedBy("");
    setSelectedPackage(initialSelectedPackage);
  };

  return (
    <div className=" h-96 flex flex-col justify-end space-y-2 mt-8">
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
          value={paidAmount}
          onChange={(e) => {
            setPaidAmount(e.target.value);
          }}
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
          value={paymentMode}
          onChange={(e) => {
            setPaymentMode(e.target.value);
          }}
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
          value={remark}
          onChange={(e) => setRemark(e.target.value)}
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
      {isAuthOwner ? (
        <p
          className=" text-center p-1 bg-slate-400 text-white rounded-sm"
          title="Please Login as a Branch to assign packages."
        >
          Package can be assigned by branch only.
        </p>
      ) : (
        <PrimaryButton
          type={"button"}
          content={"Assign"}
          onClick={onSendPackage}
        />
      )}
    </div>
  );
};

export default PackageBilling;
