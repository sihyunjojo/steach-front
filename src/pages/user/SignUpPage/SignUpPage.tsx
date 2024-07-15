import React, { useState } from 'react';
import student from '../../../assets/student.png';
import teacher from '../../../assets/teacher.png';
import { Row } from 'react-bootstrap';



const SignUpStudentPage: React.FC = () => {

  
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  interface FormData {
    userid : string;
    password : string;
    confirmPassword : string;
    email : string;
    AuthCode : string;
  }

    const [formData, setFormData] = useState({
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
      verificationCode: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  



    return (
    <>
      <div className='flex flex-col items-center justify-center'>
      {!selectedRole && (
        <>
        <p>회원가입</p>
        <div className='flex gap-10'>
          <div className='flex flex-col items-center justify-center w-96 h-96 border border-black rounded-lg' onClick={() => handleRoleSelect('student')}>
            <img src={student} className='h-auto object-contain' />
            <button onClick={() => handleRoleSelect('student')} className='mt-4 text-lg font-semibold'>학생</button>
          </div>
          <div className='flex flex-col items-center justify-center w-96 h-96 border border-black rounded-lg' onClick={() => handleRoleSelect('teacher')}>
            <img src={teacher} className='h-auto object-contain' />
            <button onClick={() => handleRoleSelect('teacher')} className='mt-4 text-lg font-semibold'>선생님</button>
          </div>
        </div>
        </>
      )}

      {selectedRole === 'student' ? (
        <>
        <div>
          <img src={student} />
        </div>
        <form className="max-w-md mx-auto p-6 bg-rose-200 shadow-md rounded-lg">
        <div>
          <label htmlFor="username" className="block text-gray-700">아이디</label>
          <input 
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          />
          <label htmlFor="password" className="block text-gray-700">비밀번호</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          <label htmlFor="username" className="block text-gray-700">비밀번호확인</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          <label htmlFor="username" className="block text-gray-700">이메일</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          <label htmlFor="username" className="block text-gray-700">인증코드</label>
          <input className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          <button type='submit' className="w-full py-2 px-4 bg-black text-white font-semibold rounded-md hover:bg-gray-700 mt-10"
          >회원가입</button>
          학생임</div>
        </form>
          </>
      ) : selectedRole === 'teacher' ? (
        <div>선생임</div>
      ) : null }
      </div>
    </>
    );
}

export default SignUpStudentPage;
