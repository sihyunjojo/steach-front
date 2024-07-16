import React, { useState } from 'react';
import student from '../../../assets/student.png';
import teacher from '../../../assets/teacher.png';
import StudentSignUp from '../../../components/user/SignUp/StudentSignUp';
import TeacherSignUp from '../../../components/user/SignUp/TeacherSignUp';
import IntroductionSignUp from '../../../components/user/SignUp/IntroductionSignUp'



const SignUpStudentPage: React.FC = () => {

  
  const [selectedRole, setSelectedRole] = useState<string>('');

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };


  return (
  <>
    <div className='flex flex-col items-center justify-center'>
    {!selectedRole && (
      <>
      <p className='text-5xl'>회원가입</p>
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
            <IntroductionSignUp/>
      </>
    )}

    {selectedRole === 'student' ? (
      <>
        <StudentSignUp />
      </>
    ) : selectedRole === 'teacher' ? (
      <>
      <TeacherSignUp />
      </>
        ) : null}

    </div>
  </>
  );
}

export default SignUpStudentPage;
