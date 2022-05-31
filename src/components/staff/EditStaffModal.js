import React, { useEffect, useState } from "react";
import RadioButton from "../custom_ui/RadioButton";
import Modal from "../custom_ui/Modal";
import PrimaryButton from "../custom_ui/PrimaryButton";
import Input from "../custom_ui/Input";
import { useDispatch } from "react-redux";
import {
  deleteImage,
  getAadharPreview,
  postImage,
  removeStaff,
  updateCurrentStaffData,
} from "../../store/staff-actions";
import { useToast } from "@chakra-ui/react";
import loadingGIF from "./../../assets/loading-loading-forever.gif";

const EditStaffModal = ({ onHideModal, staffMember }) => {
  const dispatch = useDispatch();
  const toast = useToast();

  const [isUploading, setIsUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(staffMember?.name);
  const [gender, setGender] = useState(staffMember?.gender);
  const [contact, setContact] = useState(staffMember?.contact);
  const [dob, setDOB] = useState(staffMember?.dob?.slice(0, 10));
  const [address, setAddress] = useState(staffMember?.address);
  const [file, setFile] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  const onEditStaff = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    let fileName = staffMember.aadhar;
    if (selectedFile) {
      let formData = new FormData();
      formData.append("image", selectedFile);
      if (staffMember.aadhar) {
        const delRes = await deleteImage(staffMember.aadhar);
        console.log(delRes);
      }
      const fileObj = await postImage(formData);
      fileName = fileObj.Key;
    }

    const newData = {
      name,
      gender,
      contact,
      dob,
      address,
      aadhar: fileName,
    };

    dispatch(updateCurrentStaffData(staffMember._id, newData, toast));
    setIsUploading(false);
    onHideModal();
  };

  const onRemoveStaff = (staffId) => {
    dispatch(removeStaff(staffId, toast));
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

  useEffect(() => {
    if (staffMember.aadhar) {
      dispatch(getAadharPreview(staffMember.aadhar, setFile, setLoading));
    }
  }, [dispatch]);

  return (
    <Modal onHideModal={isUploading ? () => {} : onHideModal} className="">
      <h3
        className={` text-lg border-b border-dashed border-black min-w-[50rem] ${
          !isUploading && "mb-7"
        }`}
      >
        Edit Staff -
      </h3>
      {isUploading && (
        <div className=" mb-7 flex justify-evenly bg-blue-100 py-3">
          <p className=" self-center">Uploading new Staff data ...</p>
          <img src={loadingGIF} alt="Loading ..." className={" h-10"} />
        </div>
      )}
      <div className="flex space-x-3 items-center">
        <form
          action=""
          className="w-1/2"
          onSubmit={onEditStaff}
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
              checked={gender === "M"}
            />
            <RadioButton
              name="staff-gender"
              id="staff-gender-female"
              value={gender}
              val="F"
              label="Female"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              checked={gender === "F"}
            />
          </div>
          <Input
            type="text"
            id="staff-name"
            value={name}
            placeholder="-"
            label="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            type="number"
            id="staff-contact"
            value={contact}
            placeholder="-"
            label="Contact number"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <Input
            type="date"
            id="staff-dob"
            value={dob}
            placeholder="-"
            label="D.O.B"
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          />
          <Input
            type="text"
            id="staff-address"
            value={address}
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
          <div className="flex space-x-2">
            <PrimaryButton
              content="Edit"
              type="submit"
              disabled={isUploading}
            />
            <PrimaryButton
              onClick={() => {
                onRemoveStaff(staffMember._id);
              }}
              content="Remove Staff"
              type="button"
              disabled={isUploading}
            />
          </div>
        </form>
        <div className=" border-2 border-gray-400 rounded-md flex-1 flex h-64">
          {selectedFile ? (
            <img src={preview} alt="Upload Preview" className={" mx-auto"} />
          ) : loading ? (
            <img
              className="h-10 self-center px-56"
              src={loadingGIF}
              alt="Loading ..."
            />
          ) : file ? (
            <img
              className="w-96  max-h-96"
              src={file}
              alt="Previous Uploaded File"
            />
          ) : (
            <span className="m-auto text-gray-400 ">Document Not Uploaded</span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default EditStaffModal;
