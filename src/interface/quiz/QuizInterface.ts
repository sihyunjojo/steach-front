// 퀴즈 데이타
export interface QuizData {
  // 수업 고유 ID
  lectureId: number;
  // 퀴즈 번호
  quizNumber: number;
  // 퀴즈 문제 내용
  question: string;
  // 퀴즈 정답 여부
  isAnswer: number;
  // 퀴즈 선택지 문항(리스트)
  choiceSentence: string[];
}

// 퀴즈 생성 인터페이스
export interface QuizCreate {
  lecture_id: number;
  quiz_number: number;
  question: string;
  choices: Array<string>;
  answers: Array<string>;
}

// 퀴즈 리스트 인터페이스
export interface QuizzesList {
  quiz_response_dtos: Array<QuizCreate>;
}

// 퀴즈 상태 인터페이스
export interface QuizState {
  quizzes: QuizzesList | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
