import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const UpdateMyInfo: React.FC = () => {
  const [input, setInput] = useState("");
  const [inputPassword, setInputPassword] = useState();
  const [checkPassword, setCheckPassword] = useState(false);

  const password = "1q2w3e4r";
  const isError = input === "";

  function handleInputPassword(event: any) {
    setInputPassword(event.target.value);
  }

  function handleCheckPassword() {
    if (inputPassword === password) {
      setCheckPassword((prev) => !prev);
    }
  }

  function handleInputChange(event: any) {
    setInput(event.target.value);
  }

  return (
    <>
      {!checkPassword && (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl m-2">비밀번호 확인</h1>
            <div className="border-2 rounded-xl w-96 relative m-2">
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요."
                className="w-full text-base p-2"
                value={inputPassword}
                onChange={handleInputPassword}
              />
              <button
                onClick={handleCheckPassword}
                className="absolute right-2 rounded-xl p-2 w-14 h-8 text-sm bg-orange-200 inset-y-1 hover:text-white hover:bg-orange-300"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
      {checkPassword && (
        <div className="min-h-screen">
          <FormControl isInvalid={isError}>
            <FormLabel>Email</FormLabel>
            <Input type="email" value={input} onChange={handleInputChange} />
            {!isError ? (
              <FormHelperText>
                Enter the email you'd like to receive the newsletter on.
              </FormHelperText>
            ) : (
              <FormErrorMessage>Email is required.</FormErrorMessage>
            )}
          </FormControl>
        </div>
      )}
    </>
  );
};

export default UpdateMyInfo;
