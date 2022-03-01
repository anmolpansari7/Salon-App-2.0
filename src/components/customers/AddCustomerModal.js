import React, { useState } from "react";
import Modal from "../custom_ui/Modal";
import Input from "../custom_ui/Input";
import RadioButton from "../custom_ui/RadioButton";
import PrimaryButton from "../custom_ui/PrimaryButton";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendNewCustomerData } from "../../store/current-customer-actions";

const AddCustomerModal = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState(0);
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const toast = useToast();
  const onAddCustomer = (e) => {
    e.preventDefault();
    if (name === "") {
      toast({
        title: `Enter Customer Name`,
        status: "error",
        isClosable: true,
      });

      return;
    }
    if (contact.length !== 10) {
      toast({
        title: `contact number is not valid`,
        status: "error",
        isClosable: true,
      });

      return;
    }

    if (dob === "") {
      toast({
        title: `Enter Full Date of Birth`,
        status: "error",
        isClosable: true,
      });
      return;
    }

    if (gender === "") {
      toast({
        title: `Select Gender`,
        status: "error",
        isClosable: true,
      });
      return;
    }

    const newCustomer = {
      gender: gender,
      name: name,
      contact: contact,
      dob: dob,
      address: address,
    };

    console.log(newCustomer);
    dispatch(sendNewCustomerData(newCustomer, navigate, toast));
    onHideModal();
  };

  return (
    <Modal onHideModal={onHideModal}>
      <h3 className=" text-lg border-b border-dashed border-black mb-7">
        Add Customer -
      </h3>
      <form action="">
        <div className="flex border-b border-dashed border-black justify-between mb-3">
          <p>Gender -</p>
          <RadioButton
            name="customer-gender"
            id="customer-gender-male"
            val="M"
            label="Male"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          />
          <RadioButton
            name="customer-gender"
            id="customer-gender-female"
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
          id="customer-contact"
          placeholder="-"
          label="Contact number"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
        <Input
          type="date"
          id="customer-dob"
          placeholder=""
          label="Date of Birth"
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <Input
          type="text"
          id="customer-address"
          placeholder="-"
          label="Address"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <PrimaryButton content="Add" type="submit" onClick={onAddCustomer} />
      </form>
    </Modal>
  );
};

export default AddCustomerModal;
