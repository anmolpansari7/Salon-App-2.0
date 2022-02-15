import React from "react";
import Modal from "../custom_ui/Modal";
import Input from "../custom_ui/Input";
import RadioButton from "../custom_ui/RadioButton";
import PrimaryButton from "../custom_ui/PrimaryButton";

const AddCustomerModal = ({ onHideModal }) => {
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
          />
          <RadioButton
            name="customer-gender"
            id="customer-gender-female"
            val="F"
            label="Female"
          />
        </div>
        <Input type="text" id="customer-name" placeholder="-" label="Name" />
        <Input
          type="number"
          id="customer-contact"
          placeholder="-"
          label="Contact number"
        />
        <Input
          type="date"
          id="customer-dob"
          placeholder=""
          label="Date of Birth"
        />
        <Input
          type="text"
          id="customer-address"
          placeholder="-"
          label="Address"
        />
        <PrimaryButton content="Add" />
      </form>
    </Modal>
  );
};

export default AddCustomerModal;
