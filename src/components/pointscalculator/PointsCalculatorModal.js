import React, { useState } from "react";
import Modal from "../custom_ui/Modal";
import { Input, useToast } from "@chakra-ui/react";
import PrimaryButton from "./../custom_ui/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  updatePointsCalculatorData,
  sendPointsCalculatorData,
} from "../../store/points-calculator-actions";
import { validatePointsCalculator } from "../../utils/pointsCalculator.utils";

const PointsCalculatorModal = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const fR = useSelector((state) => state.pointsCalculator.forRupee);
  const gP = useSelector((state) => state.pointsCalculator.givenPoints);
  const fP = useSelector((state) => state.pointsCalculator.forPoints);
  const gD = useSelector((state) => state.pointsCalculator.givenDiscount);

  const [forRupee, setForRupee] = useState(fR);
  const [givenPoints, setGivenPoints] = useState(gP);
  const [forPoints, setForPoints] = useState(fP);
  const [givenDiscount, setGivenDiscount] = useState(gD);

  const onChangePointsCalculator = () => {
    const calc = {
      forRupee,
      givenPoints,
      forPoints,
      givenDiscount,
      toast,
    };
    if (!validatePointsCalculator(calc, toast)) {
      return;
    }

    dispatch(
      updatePointsCalculatorData(
        forRupee,
        givenPoints,
        forPoints,
        givenDiscount,
        toast
      )
    );
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <h3 className=" text-lg border-b border-dashed border-black mb-7">
        Points Calculator
      </h3>
      <div className="flex justify-between mb-5 border-b border-black border-dashed pb-2">
        <Input
          type={"number"}
          variant="filled"
          width={"4rem"}
          size={"sm"}
          value={forRupee}
          onChange={(e) => {
            setForRupee(e.target.value);
          }}
        />
        <p className=" self-end">Rs. will give customer</p>
        <Input
          type={"number"}
          variant="filled"
          width={"4rem"}
          size={"sm"}
          value={givenPoints}
          onChange={(e) => {
            setGivenPoints(e.target.value);
          }}
        />
        <p className=" self-end">Pts.</p>
      </div>
      <div className="flex justify-between mb-5 border-b border-black border-dashed pb-2 space-x-4">
        <Input
          type="number"
          variant="filled"
          width={"4rem"}
          size={"sm"}
          value={forPoints}
          onChange={(e) => {
            setForPoints(e.target.value);
          }}
        />
        <p className=" self-end">Pts. will give disount of</p>
        <Input
          type="number"
          variant="filled"
          width={"4rem"}
          size={"sm"}
          value={givenDiscount}
          onChange={(e) => {
            setGivenDiscount(e.target.value);
          }}
        />
        <p className=" self-end">Rs.</p>
      </div>

      <PrimaryButton
        type={"button"}
        content={"Save Changes"}
        onClick={onChangePointsCalculator}
      />
    </Modal>
  );
};

export default PointsCalculatorModal;
