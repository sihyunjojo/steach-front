import React, { useState } from 'react';
import LoginBannerBgImg from '../../assets/banner.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 이진송
// 디자인 변경 필요함
const Login: React.FC = () => {

  const navigate = useNavigate()

  interface FormData {
    userid : string;
    password : string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    userid: '',
    password: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
    ...formData,
    [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  const axiosLogin = (event: FormData) => {
  if (Object.values(formData).some(value => value === '')) {
    alert('아이디, 비밀번호를 입력해주세요.');
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
      <div className='main-content relative h-screen background-image bg-cover bg-center bg-no-repeat'>
        <img src={LoginBannerBgImg} className='absolute opacity-60 z-0 w-full' />
        <div className="flex items-center justify-center h-full">
          <form className="relative max-w-md mx-auto p-6 bg-rose-200 shadow-md rounded-lg z-10" onSubmit={handleSubmit}>
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
              {/* 해당부분 로그인 버튼 확인하고 수정해야겠음 - 이진송이 할거임 */}
                <button type='submit' className="w-full py-1 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-10"
                onClick={() => { console.log(formData); axiosLogin(formData) }}>로그인</button>
                <button type='submit' className="w-full py-1 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-1"
                onClick={() => { navigate('/user/signup') }}>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Login;