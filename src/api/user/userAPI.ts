import axios from "axios";
import { teacherInfo, studentInfo } from "../../store/userInfo/profileSlice";
import { TeacherInfoUpdateForm } from "../../components/teacher/teacherMyInfo/TeacherMyInfoUpdateForm";
import { StudentInfoUpdateForm } from "../../components/student/studentMyInfo/StudentMyInfoUpdateForm";

const BASE_URL = "http://43.202.1.52:8080";

const tokenData = localStorage.getItem("auth");
const jsontokenData = tokenData ? JSON.parse(tokenData) : null;
const token = jsontokenData ? jsontokenData.token : "";

// 비밀번호 체크
export const passwordCheck = async (password: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/check/password`,
      { password },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 선생님 정보 조회
export const teacherInfoGet = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/teachers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: teacherInfo = {
      username: response.data.username,
      nickname: response.data.nickname,
      email: response.data.email,
      volunteer_time: response.data.volunteer_time,
      brief_introduction: response.data.brief_introduction,
      academic_background: response.data.academic_background,
      specialization: response.data.specialization,
    };

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 선생님 정보 수정
export const teacherInfoUpdate = async (formData: TeacherInfoUpdateForm) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/teachers`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 학생 정보 조회
export const studentInfoGet = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/students`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: studentInfo = {
      username: response.data.username,
      nickname: response.data.nickname,
      email: response.data.email,
    };

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 학생 정보 수정
export const studentInfoUpdate = async (formData: StudentInfoUpdateForm) => {
  try {
    const response = await axios.patch(
      `${BASE_URL}/api/v1/students`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
