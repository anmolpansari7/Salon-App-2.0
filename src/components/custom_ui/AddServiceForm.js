import React, { useState } from "react";
import PencilImg from "./../../assets/pencilImg.svg";
import { sendServiceData } from "../../store/services-actions";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { validateService } from "../../utils/price-page-utils";

const AddServiceForm = ({ category, gender }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);

  const onAddService = (e) => {
    e.preventDefault();

    if (!validateService(name, cost, toast)) {
      return;
    }

    dispatch(sendServiceData(gender, category, name, cost));
    console.log(gender, category, name, cost);
    setCost(0);
    setName("");
  };

  return (
    <form
      className=" flex justify-between border-b border-dashed border-black mt-5"
      onSubmit={onAddService}
    >
      <input
        value={name}
        type="text"
        className="focus:outline-none text-base placeholder:text-base flex-1"
        placeholder="Add New Item"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        value={cost}
        type="number"
        className="focus:outline-none text-base placeholder:text-base w-20 text-right"
        placeholder="Amount"
        onChange={(e) => {
          setCost(e.target.value);
        }}
      />
      <p className=" mx-2"> Rs.</p>
      <img src={PencilImg} alt="edit" />
      <button type="submit" className=" cursor-default hidden">
        Add
      </button>
    </form>
  );
};

export default AddServiceForm;
