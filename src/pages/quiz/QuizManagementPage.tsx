import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../../store";
import { fetchLectureQuiz } from "../../store/QuizSlice";
import NoQuiz from "../../components/teacher/quiz/NoQuiz";
import FetchQuiz from "../../components/teacher/quiz/FetchQuiz";

// 퀴즈 관리 페이지
const QuizManagementPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { lecture_id } = useParams<{ lecture_id: string }>();
  const quizzes = useSelector((state: RootState) => state.quiz.quizzes || []);

  // 하나의 강의에 대한 퀴즈 정보 불러오기
  useEffect(() => {
    if (lecture_id) {
      dispatch(fetchLectureQuiz(lecture_id));
    }
  }, [dispatch, lecture_id, quizzes]);

  return <>{quizzes.length > 0 ? <FetchQuiz /> : <NoQuiz />}</>;
};

export default QuizManagementPage;
