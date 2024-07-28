import axios from "axios";
import { teacherInfo } from "../../store/userInfo/profileSlice";

const BASE_URL = "http://43.202.1.52:8080";

// 선생님 정보 조회
export const teacherInfoGet = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/teachers`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data: teacherInfo = {
      username: response.data.username,
      name: response.data.name,
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

// 학생 정보 조회
