import React from 'react';
import student from '../../assets/student.png';
import teacher from '../../assets/teacher.png';
import SignUpMainComponents from '../../components/user/SignUp/SignUpMain.tsx'
import StudentSignUpComponents from '../../components/user/SignUp/SignUpStudent.tsx'
import TeacherSignUpComponents from '../../components/user/SignUp/SignUpTeacher.tsx'



const SignUpPage: React.FC = () => {
    return (
    <>
      <p className='text-center text-6xl'>회원가입</p>
        <SignUpMainComponents />
            {/* 조건문 */}
            <StudentSignUpComponents />
            <TeacherSignUpComponents />
    </>
  );
}

export default SignUpPage;
