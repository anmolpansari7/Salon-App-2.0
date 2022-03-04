import { useState } from "react";
import { Input, InputGroup, Button, InputRightElement } from "@chakra-ui/react";

const PasswordInput = ({ placeholder, onChange }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder={placeholder}
        size="sm"
        isRequired
        onChange={(e) => {
          onChange(e);
        }}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.3rem" size="sm" onClick={handleClick}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default PasswordInput;
