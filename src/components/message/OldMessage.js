import React from "react";
import InfoIcon from "./../../assets/info_icon.svg";

const OldMessage = ({ messageContent }) => {
  return (
    <div className="text-sm p-3 border border-gray-400 rounded-md flex flex-col">
      <p>{messageContent}</p>
      <div className="flex self-end">
        <span className=" text-gray-400">10-02-2022</span>
        <img
          src={InfoIcon}
          alt="info"
          className="ml-3 cursor-pointer"
          title={"Bhavesh Chandel, Nikki Sing, Avatar Singh"}
        />
      </div>
    </div>
  );
};

export default OldMessage;
