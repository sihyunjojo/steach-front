import React from 'react';

const StudentSignUpComponents: React.FC = () => {
    return (
    <>
      <p className='text-center text-6xl'>회원가입</p>
    <div className='flex justify-center gap-10'>
      <div className='flex flex-col items-center justify-center w-96 h-96 border border-black'>
        <p className='text-5xl'>학생</p>
      </div>
    </div>
    </>
  );
}

export default StudentSignUpComponents;
