import React, { useState } from 'react';
import student from '../../../assets/student.png';
import axios from 'axios';


const StudentSignUp: React.FC = () => {

  interface FormData {
      userid : string;
      password : string;
      confirmPassword : string;
      email : string;
      AuthCode : string;
  }

  const [formData, setFormData] = useState<FormData>({
      userid: '',
      password: '',
      confirmPassword: '',
      email: '',
      AuthCode: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData({
      ...formData,
      [name]: value,
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
};

  const axiosSignUp = (event: FormData) => {
    if (Object.values(formData).some(value => value === '')) {
      alert('모든 필드를 채워주세요.');
      return;
    }
  axios.post(`API`, event)
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
          <label htmlFor="userid" className="block text-gray-700">아이디</label>
          <input 
            type='text'
            id='userid'
            name='userid'
            value={formData.userid}
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
          <button type='submit' className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-10"
            onClick={() => { console.log(formData);  axiosSignUp(formData)}}>회원가입</button>
          </div>
        </form>
    </>
  );
}

export default StudentSignUp;