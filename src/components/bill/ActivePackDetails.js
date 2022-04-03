import React from "react";
import { Checkbox } from "@chakra-ui/react";

const ActivePackDetails = () => {
  return (
    <div className=" border p-3 border-gray-400 rounded-lg">
      <div className="flex space-x-3">
        <Checkbox />
        <h3 className=" text-sm"> Use Package -</h3>
      </div>
      <div className=" h-32 overflow-auto"></div>
      <div className=" flex justify-between text-sm">
        <p>Package Amount - </p>
        <p>250 Rs.</p>
      </div>
    </div>
  );
};

export default ActivePackDetails;
