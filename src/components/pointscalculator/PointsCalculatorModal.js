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

  const fRM = useSelector((state) => state.pointsCalculator.forRupeeMale);
  const gPM = useSelector((state) => state.pointsCalculator.givenPointsMale);
  const fPM = useSelector((state) => state.pointsCalculator.forPointsMale);
  const gDM = useSelector((state) => state.pointsCalculator.givenDiscountMale);
  const fRF = useSelector((state) => state.pointsCalculator.forRupeeFemale);
  const gPF = useSelector((state) => state.pointsCalculator.givenPointsFemale);
  const fPF = useSelector((state) => state.pointsCalculator.forPointsFemale);
  const gDF = useSelector(
    (state) => state.pointsCalculator.givenDiscountFemale
  );

  const [forRupeeMale, setForRupeeMale] = useState(fRM);
  const [givenPointsMale, setGivenPointsMale] = useState(gPM);
  const [forPointsMale, setForPointsMale] = useState(fPM);
  const [givenDiscountMale, setGivenDiscountMale] = useState(gDM);
  const [forRupeeFemale, setForRupeeFemale] = useState(fRF);
  const [givenPointsFemale, setGivenPointsFemale] = useState(gPF);
  const [forPointsFemale, setForPointsFemale] = useState(fPF);
  const [givenDiscountFemale, setGivenDiscountFemale] = useState(gDF);

  const onChangePointsCalculator = () => {
    const calc = {
      forRupeeMale,
      givenPointsMale,
      forPointsMale,
      givenDiscountMale,
      forRupeeFemale,
      givenPointsFemale,
      forPointsFemale,
      givenDiscountFemale,
      toast,
    };

    if (!validatePointsCalculator(calc, toast)) {
      return;
    }

    dispatch(
      updatePointsCalculatorData(
        forRupeeMale,
        givenPointsMale,
        forPointsMale,
        givenDiscountMale,
        forRupeeFemale,
        givenPointsFemale,
        forPointsFemale,
        givenDiscountFemale,
        toast
      )
    );
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <div>
        <h3 className=" text-lg border-b border-dashed border-black mb-7">
          Points Calculator for Male
        </h3>
        <div className="flex justify-between mb-5 border-b border-black border-dashed pb-2">
          <Input
            type={"number"}
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={forRupeeMale}
            onChange={(e) => {
              setForRupeeMale(e.target.value);
            }}
          />
          <p className=" self-end">Rs. will give customer</p>
          <Input
            type={"number"}
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={givenPointsMale}
            onChange={(e) => {
              setGivenPointsMale(e.target.value);
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
            value={forPointsMale}
            onChange={(e) => {
              setForPointsMale(e.target.value);
            }}
          />
          <p className=" self-end">Pts. will give disount of</p>
          <Input
            type="number"
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={givenDiscountMale}
            onChange={(e) => {
              setGivenDiscountMale(e.target.value);
            }}
          />
          <p className=" self-end">Rs.</p>
        </div>
      </div>
      <div>
        <h3 className=" text-lg border-b border-dashed border-black mb-7">
          Points Calculator for Female
        </h3>
        <div className="flex justify-between mb-5 border-b border-black border-dashed pb-2">
          <Input
            type={"number"}
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={forRupeeFemale}
            onChange={(e) => {
              setForRupeeFemale(e.target.value);
            }}
          />
          <p className=" self-end">Rs. will give customer</p>
          <Input
            type={"number"}
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={givenPointsFemale}
            onChange={(e) => {
              setGivenPointsFemale(e.target.value);
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
            value={forPointsFemale}
            onChange={(e) => {
              setForPointsFemale(e.target.value);
            }}
          />
          <p className=" self-end">Pts. will give disount of</p>
          <Input
            type="number"
            variant="filled"
            width={"4rem"}
            size={"sm"}
            value={givenDiscountFemale}
            onChange={(e) => {
              setGivenDiscountFemale(e.target.value);
            }}
          />
          <p className=" self-end">Rs.</p>
        </div>
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
