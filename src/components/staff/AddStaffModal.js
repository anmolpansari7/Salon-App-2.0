import React, { useState } from "react";
import RadioButton from "../custom_ui/RadioButton";
import Modal from "../custom_ui/Modal";
import PrimaryButton from "../custom_ui/PrimaryButton";
import Input from "../custom_ui/Input";
import { useDispatch } from "react-redux";
import { sendNewStaffData } from "../../store/staff-actions";
import { useToast } from "@chakra-ui/react";

const AddStaffModal = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [aadharDetails, setAaadharDetails] = useState("");

  const onAddStaff = (e) => {
    e.preventDefault();

    const newStaff = {
      name,
      gender,
      contact,
      dob,
      address,
      aadharDetails,
    };

    dispatch(sendNewStaffData(newStaff, toast));
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal} className="">
      <h3 className=" text-lg border-b border-dashed border-black mb-7 min-w-[50rem]">
        Add Staff -
      </h3>
      <div className="flex space-x-3">
        <form action="" className="w-1/2" onSubmit={onAddStaff}>
          <div className="flex border-b border-dashed border-black justify-between mb-3">
            <p>Gender -</p>
            <RadioButton
              name="staff-gender"
              id="staff-gender-male"
              val="M"
              label="Male"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
            <RadioButton
              name="staff-gender"
              id="staff-gender-female"
              val="F"
              label="Female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          </div>
          <Input
            type="text"
            id="customer-name"
            placeholder="-"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="number"
            id="staff-contact"
            placeholder="-"
            label="Contact number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <Input
            type="date"
            id="staff-dob"
            placeholder="-"
            label="D.O.B"
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
          <Input
            type="text"
            id="staff-address"
            placeholder="-"
            label="Address"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <Input type="file" id="staff-aadhar" placeholder="-" label="Aadhar" />
          <PrimaryButton content="Add" type="submit" />
        </form>
        <div className=" border-2 border-gray-400 rounded-md flex-1 flex">
          <span className="m-auto text-gray-400 ">
            Uploaded Document Preview
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default AddStaffModal;
