import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../custom_ui/Modal";
import { getAadharPreview } from "../../store/staff-actions";
import loadingGIF from "./../../assets/loading-loading-forever.gif";

const AadharPreviewModal = ({ onHideModal, imageId }) => {
  const dispatch = useDispatch();
  const [file, setFile] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (imageId) {
      dispatch(getAadharPreview(imageId, setFile, setLoading));
    }
  }, [dispatch, imageId]);

  return (
    <Modal onHideModal={onHideModal} className="">
      <div className=" border-2 border-gray-400 rounded-md flex-1 flex h-64">
        {imageId === "" ? (
          <span className="m-auto text-gray-400 ">
            Uploaded Document Preview
          </span>
        ) : loading ? (
          <img
            className="h-10 self-center px-56"
            src={loadingGIF}
            alt="Loading ..."
          />
        ) : (
          <img className="w-96  max-h-96" src={file} alt="Upload Preview" />
        )}
      </div>
    </Modal>
  );
};

export default AadharPreviewModal;
