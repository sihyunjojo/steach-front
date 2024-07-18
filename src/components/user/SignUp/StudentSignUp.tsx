import React, { useState } from 'react';
import student from '../../../assets/student.png';
import axios from 'axios';


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
    axiosSignUp(formData)
  };
  

// formData를 확인해서 빈 곳이 잇다면 alert 뜸
  const axiosSignUp = (event: FormData) => {
    if (Object.values(formData).some(value => value === '')) {
      alert('모든 필드를 채워주세요.');
      return;
    }

    // form의 id값 따라서 받은 값을 넣어줌
    const formDataToSend = new FormData();
    formDataToSend.append('userId', event.userId);
    formDataToSend.append('password', event.password);
    formDataToSend.append('confirmPassword', event.confirmPassword);
    formDataToSend.append('email', event.email);
    formDataToSend.append('AuthCode', event.AuthCode);


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
        <form className="max-w-md mx-auto p-6 bg-rose-200 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId" className="block text-gray-700">아이디</label>
          <input 
            type='text'
            id='userId'
            name='userId'
            value={formData.userId}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="password" className="block text-gray-700">비밀번호</label>
          <input
            type='password'
            id='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="confirmPassword" className="block text-gray-700">비밀번호확인</label>
          <input
            type='password'
            id='confirmPassword'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="email" className="block text-gray-700">이메일</label>
          <input
            type='text'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <label htmlFor="AuthCode" className="block text-gray-700">인증코드</label>
          <input
            type='text'
            id='AuthCode'
            name='AuthCode'
            value={formData.AuthCode}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type='submit' className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-10">회원가입</button>
          </div>
        </form>
    </>
  );
}

export default StudentSignUp;