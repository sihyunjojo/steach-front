import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

// 김헌규 - 기존 자바스크립트 방식의 코드를 타입스크립트 방식으로 수정함.
const TeacherUpdateMyInfo: React.FC = () => {
  // 김헌규
  interface FormData {
    userId: string;
    name: string;
    password: string;
    phoneNumber: number;
    email: string;
  }

  // interface로 생성된 FormData 객체의 정보에 대한 입력을 업데이트 하는 상태 및 함수
  // 김헌규
  const [formData, setFormData] = useState<FormData>({
    userId: "",
    name: "",
    password: "",
    phoneNumber: 0,
    email: "",
  });

  // FormData 객체의 정보에 대한 입력을 업데이트 하는 핸들러 함수
  // 김헌규
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // 비밀번호 확인 Input 상태 및 핸들러 함수
  // 김헌규
  const [inputPassword, setInputPassword] = useState("");

  function handleInputPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setInputPassword(event.target.value);
  }

  // 비밀번호 확인 상태
  // 김헌규
  const [checkPassword, setCheckPassword] = useState(false);

  // 현재 비밀번호 일치 여부 핸들러 함수
  // 김헌규
  function handleCheckPassword(
    event:
      | React.KeyboardEvent<HTMLInputElement>
      | React.MouseEvent<HTMLButtonElement>
  ) {
    if (event.type === "Enter" || event.type === "click") {
      if (inputPassword === password) {
        setCheckPassword((prev) => !prev);
      }
    }
  }

  const password = "1q2w3e4r";

  return (
    <div className="flex justify-center">
      {!checkPassword && (
        <div className="flex flex-col items-center mt-24">
          <h1 className="text-4xl m-2">비밀번호 확인</h1>
          <div className="border-2 rounded-xl w-96 relative m-2">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              className="w-full text-base p-2"
              value={formData.password}
              onChange={handleInputPassword}
              onKeyDown={handleCheckPassword}
            />
            <button
              onClick={handleCheckPassword}
              className="absolute right-2 rounded-xl p-2 w-14 h-8 text-sm bg-orange-200 inset-y-1 hover:text-white hover:bg-orange-300"
            >
              확인
            </button>
          </div>
        </div>
      )}
      {checkPassword && (
        <div className="border-2 rounded-xl p-6 mt-12">
          <FormControl>
            <h1 className="text-center text-4xl my-2 p-2">내정보 수정</h1>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">이름</FormLabel>
              <Input
                type="text"
                value={formData.userId}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">비밀번호 변경</FormLabel>
              <Input
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">비밀번호 변경 확인</FormLabel>
              <Input
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">이름</FormLabel>
              <Input
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">휴대폰 번호 (-없이)</FormLabel>
              <Input
                type="text"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <div className="my-4 p-2">
              <FormLabel className="text-2xl">이메일</FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="border-2 rounded-lg p-2"
              />
            </div>
            <button className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white">
              변경하기
            </button>
          </FormControl>
        </div>
      )}
    </div>
  );
};

export default TeacherUpdateMyInfo;
