import React, { useState } from 'react';
import student from '../../../assets/student.png';
import axios from 'axios';
import { FormControl, FormLabel, Input } from "@chakra-ui/react";


// 이진송
const StudentSignUp: React.FC = () => {

  // FormData 타입 포함해서 만듦
  interface FormData {
      userId : string;
      password : string;
      confirmPassword : string;
      email : string;
      AuthCode : string;
  }

  // 데이터를 담기 위한 박스 개념, 함수를 위의 interface에 맞춰서 작성
  const [formData, setFormData] = useState<FormData>({
      userId: '',
      password: '',
      confirmPassword: '',
      email: '',
      AuthCode: '',
  });

//사용자가 값을 입력할 때 마다, onChange로 데이터가 입력됨.
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({
      ...formData,
      [name]: value,
      });
  };

  // 버튼 눌렀을때 나타나는 이벤트, 
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axiosSignUp();
  };
  

// formData를 확인해서 빈 곳이 잇다면 alert 뜸
  const axiosSignUp = () => {

    // form의 id값 따라서 받은 값을 넣어줌
    const formDataToSend = new FormData();
    formDataToSend.append('userId', formData.userId);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('confirmPassword', formData.confirmPassword);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('AuthCode', formData.AuthCode);


    // API 통신
    axios.post(`API`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    })
    .then((response) => {
      console.log(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  } 
      
    
  return (
    <>
        <div>
          <img src={student} />
        </div>
        <form className="max-w-md mx-auto border-2 rounded-xl p-6 mb-28" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel htmlFor="userId" className="text-2xl">아이디</FormLabel>
          <Input 
            type='text'
            id='userId'
            name='userId'
            value={formData.userId}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <FormLabel htmlFor="password" className="text-2xl">비밀번호</FormLabel>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <FormLabel htmlFor="confirmPassword" className="text-2xl">비밀번호확인</FormLabel>
          <Input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <FormLabel htmlFor="email" className="text-2xl">이메일</FormLabel>
          <Input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <FormLabel htmlFor="AuthCode" className="text-2xl">인증코드</FormLabel>
          <Input
            type='text'
            id='AuthCode'
            name='AuthCode'
            value={formData.AuthCode}
            onChange={handleChange}
            className="border-2 rounded-lg w-full p-2 mb-5"
            required
          />
          <button type='submit' className="w-full text-center bg-orange-300 p-2 rounded-lg hover:bg-orange-400 hover:text-white">회원가입</button>
          </FormControl>
        </form>
    </>
  );
}

export default StudentSignUp;