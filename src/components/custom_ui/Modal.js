import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onHideModal }) => {
  return (
    <div
      className="absolute h-full w-full bg-black opacity-60 z-10"
      onClick={onHideModal}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" absolute p-7 h-fit w-fit bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 rounded-md font-body">
      {" "}
      <div>{props.children}</div>{" "}
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideModal={props.onHideModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
