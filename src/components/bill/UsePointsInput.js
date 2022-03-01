import React from "react";
import { Checkbox, Input } from "@chakra-ui/react";

const UsePointsInput = () => {
  return (
    <div className="flex border-b border-dashed border-black justify-between pt-2">
      <p className="self-center">*** Use Points -</p>
      <Checkbox />
      <p className=" self-center"> -50 Rs.</p>
      <Input type={"number"} size={"xs"} width={"4rem"} textAlign={"right"} />
      <p className="self-center">Pts.</p>
    </div>
  );
};

export default UsePointsInput;
