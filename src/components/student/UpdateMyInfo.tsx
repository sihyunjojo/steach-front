import React, { useState } from "react";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";

const UpdateMyInfo: React.FC = () => {
  const [checkPassword, setCheckPassword] = useState(false);
  return (
    <>
      {!checkPassword &&
        function PasswordInput() {
          const [show, setShow] = React.useState(false);
          const handleClick = () => setShow(!show);

          return (
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          );
        }}
      {/* {checkPassword && } */}
    </>
  );
};

export default UpdateMyInfo;
