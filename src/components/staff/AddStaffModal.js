import React, { useEffect, useState } from "react";
import RadioButton from "../custom_ui/RadioButton";
import Modal from "../custom_ui/Modal";
import PrimaryButton from "../custom_ui/PrimaryButton";
import Input from "../custom_ui/Input";
import { useDispatch } from "react-redux";
import { postImage, sendNewStaffData } from "../../store/staff-actions";
import { useToast } from "@chakra-ui/react";
import loadingGIF from "./../../assets/loading-loading-forever.gif";

const AddStaffModal = ({ onHideModal }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setContact] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const onAddStaff = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    let formData = new FormData();
    formData.append("image", selectedFile);

    const fileName = await postImage(formData);
    console.log("fileName", fileName);
    const newStaff = {
      name,
      gender,
      contact,
      dob,
      address,
      fileName: fileName.Key,
    };

    dispatch(sendNewStaffData(newStaff, toast));
    setIsLoading(false);
    onHideModal();
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  return (
    <Modal onHideModal={isLoading ? () => {} : onHideModal} className="">
      <h3
        className={` text-lg border-b border-dashed border-black min-w-[50rem] ${
          !isLoading && "mb-7"
        }`}
      >
        Add Staff -
      </h3>
      {isLoading && (
        <div className=" mb-7 flex justify-evenly bg-blue-100 py-3">
          <p className=" self-center">Uploading new Staff data ...</p>
          <img src={loadingGIF} alt="Loading ..." className={" h-10"} />
        </div>
      )}
      <div className="flex space-x-3 items-center">
        <form
          action=""
          className="w-1/2"
          onSubmit={onAddStaff}
          enctype="multipart/form-data"
        >
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
          <Input
            type="file"
            id="staff-aadhar"
            placeholder="-"
            label="Aadhar"
            onChange={onSelectFile}
            accept="image/*"
          />
          <PrimaryButton content="Add" type="submit" disabled={isLoading} />
        </form>
        <div className=" border-2 border-gray-400 rounded-md flex-1 flex h-64">
          {selectedFile ? (
            <img src={preview} alt="Upload Preview" className={" mx-auto"} />
          ) : (
            <span className="m-auto text-gray-400 ">
              Uploaded Document Preview
            </span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default AddStaffModal;
