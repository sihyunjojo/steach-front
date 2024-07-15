import React from 'react';
import student from '../../../assets/student.png';
import teacher from '../../../assets/teacher.png';

const SignUpMainComponents: React.FC = () => {
    return (
    <>
<div className='flex justify-center gap-10'>
  <div className='flex flex-col items-center justify-center w-96 h-96 border border-black'>
    <img src={student} className='h-auto object-contain' />
    <p className='text-5xl'>학생</p>
  </div>
  <div className='flex flex-col items-center justify-center w-96 h-96 border border-black'>
    <img src={teacher} className='h-auto object-contain' />
    <p className='text-5xl'>선생</p>
  </div>
        </div>
    </>
    );
}

export default SignUpMainComponents;