import axios from "axios";
import { BASE_URL } from "../BASE_URL";


// Create quiz for a lecture
export const createQuiz = async (
  lectureId: number,
  quizData: {
    quiz_number: number;
    question: string;
    choices: string[];
    answers: string[];
  }
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/quizzes/${lectureId}`,
      quizData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch quiz details
export const fetchQuizDetails = async (quizId: number) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
