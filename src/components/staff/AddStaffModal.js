import React from "react";
import RadioButton from "../custom_ui/RadioButton";
import Modal from "../custom_ui/Modal";
import PrimaryButton from "../custom_ui/PrimaryButton";
import Input from "../custom_ui/Input";

const AddStaffModal = ({ onHideModal }) => {
  return (
    <Modal onHideModal={onHideModal} className="">
      <h3 className=" text-lg border-b border-dashed border-black mb-7 min-w-[50rem]">
        Add Staff -
      </h3>
      <div className="flex space-x-3">
        <form action="" className="w-1/2">
          <div className="flex border-b border-dashed border-black justify-between mb-3">
            <p>Gender -</p>
            <RadioButton
              name="staff-gender"
              id="staff-gender-male"
              val="M"
              label="Male"
            />
            <RadioButton
              name="staff-gender"
              id="staff-gender-female"
              val="F"
              label="Female"
            />
          </div>
          <Input type="text" id="customer-name" placeholder="-" label="Name" />
          <Input
            type="number"
            id="staff-contact"
            placeholder="-"
            label="Contact number"
          />
          <Input
            type="text"
            id="staff-address"
            placeholder="-"
            label="Address"
          />
          <Input type="file" id="staff-aadhar" placeholder="-" label="Aadhar" />
          <PrimaryButton content="Add" />
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
