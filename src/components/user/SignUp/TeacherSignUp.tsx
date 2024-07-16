import React, { useState } from 'react';
import teacher from '../../../assets/teacher.png';
import axios from 'axios';

const TeacherSignUp: React.FC = () => {

  interface FormData {
      userid : string;
      password : string;
      confirmPassword : string;
      email : string;
      uploadfile : File | null;
  }

  const [formData, setFormData] = useState<FormData>({
      userid: '',
      password: '',
      confirmPassword: '',
      email: '',
      uploadfile: null,
  });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //     ...formData,
  //     [name]: value,
  //     });
  // };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (name === 'uploadfile' && files) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        uploadfile: files[0],
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
  };
    
  const axiosSignUp = (event: FormData) => {
    if (Object.values(formData).some(File => File === null)) {
      alert('파일넣어')
      return;
    }
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
          <img src={teacher} />
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
          <label htmlFor="uploadfile" className="block text-gray-700">증명서</label>
          <input
            type='file'
            id='uploadfile'
            name='uploadfile'
            // value={formData.uploadfile}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button type='submit' className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-10"
            onClick={() => { console.log(formData); axiosSignUp(formData)}}>회원가입</button>
          </div>
        </form>
    </>
  );
}

export default TeacherSignUp;