import React, { useState } from "react";
import student from "../../assets/student.png";
import teacher from "../../assets/teacher.png";
import StudentSignUp from "../../components/user/SignUp/StudentSignUp";
import TeacherSignUp from "../../components/user/SignUp/TeacherSignUp";
import IntroductionSignUp from "../../components/user/SignUp/IntroductionSignUp";

// 이진송
// 디자인 수정 필요
const SignUpStudentPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("");

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {!selectedRole && (
          <>
            <p className="text-5xl p-20">회원가입</p>
            <div className="flex gap-10 mb-40">
              <div
                className="flex flex-col items-center justify-center w-40 h-40 border border-black rounded-lg md:w-64 md:h-64 lg:w-96 lg:h-96"
                onClick={() => handleRoleSelect("student")}
              >
                <img src={student} className="h-auto object-contain size-2/5 md:size-3/5 lg:size-4/5" />
                <button
                  onClick={() => handleRoleSelect("student")}
                  className="mt-4 text-lg font-semibold"
                >
                  학생
                </button>
              </div>
              <div
                className="flex flex-col items-center justify-center w-40 h-40 border border-black rounded-lg  md:w-64 md:h-64 lg:w-96 lg:h-96"
                onClick={() => handleRoleSelect("teacher")}
              >
                <img src={teacher} className="h-auto object-contain size-2/5 md:size-3/5 lg:size-4/5" />
                <button
                  onClick={() => handleRoleSelect("teacher")}
                  className="mt-4 text-lg font-semibold"
                >
                  선생님
                </button>
              </div>
            </div>
            {/* 아래 페이지 메인(홈보다 앞)페이지로 옮길 예정, 임시로 여기 둠ㅋ */}
            <IntroductionSignUp />
          </>
        )}

        {selectedRole === "student" ? (
          <>
            <StudentSignUp />
          </>
        ) : selectedRole === "teacher" ? (
          <>
            <TeacherSignUp />
          </>
        ) : null}
      </div>
    </>
  );
};

export default SignUpStudentPage;
