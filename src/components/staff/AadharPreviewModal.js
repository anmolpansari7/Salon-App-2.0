import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../custom_ui/Modal";
import { getAadharPreview } from "../../store/staff-actions";

const AadharPreviewModal = ({ onHideModal, imageId }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    if (imageId) {
      dispatch(getAadharPreview(imageId, setFile));
    }
  }, [dispatch, imageId]);

  return (
    <Modal onHideModal={onHideModal} className="">
      <div className=" border-2 border-gray-400 rounded-md flex-1 flex h-64">
        {imageId === "" ? (
          <span className="m-auto text-gray-400 ">
            Uploaded Document Preview
          </span>
        ) : (
          <img className=" h-56 w-52" src={file} />
        )}
      </div>
    </Modal>
  );
};

export default AadharPreviewModal;
