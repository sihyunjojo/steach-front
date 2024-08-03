import axios from "axios";
import { BASE_URL } from "../BASE_URL";
import { QuizCreateSendForm } from "../../interface/quiz/QuizInterface";

// 토큰 추출
const userData = localStorage.getItem("auth");
const token = userData ? JSON.parse(userData).token : null;

// 단일 퀴즈 조회

// 하나의 강의에 대한 퀴즈들 조회
export const fetchLectureQuizApi = async (lectureId: string) => {
  const response = await axios.get(
    `${BASE_URL}/api/v1/quizzes/lecture/${lectureId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

// 퀴즈 생성
export const createQuizApi = async (quizCreateData: QuizCreateSendForm) => {
  // 강의 아이디
  const lectureId: string | undefined = quizCreateData.lectureId;

  const sendData = {
    quiz_list: quizCreateData.quiz_list,
  };

  const response = await axios.post(
    `${BASE_URL}/api/v1/quizzes/${lectureId}`,
    sendData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteQuizApi = async (quizId: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/quizzes/${quizId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response;
};
