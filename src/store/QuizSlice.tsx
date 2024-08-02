import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { QuizState, QuizCreate } from "../interface/quiz/QuizInterface";
import axios from "axios";

// 퀴즈 초기 상태
const initialState: QuizState = {
  quizzes: null,
  status: "idle",
  error: null,
};

// 퀴즈 생성 함수
const quizCreate = createAsyncThunk<QuizCreate>(
  "quiz/create",
  async (quizCreateData, thunkAPI) => {
    try {
      // 퀴즈 생성 api 호출
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 퀴즈 슬라이스
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export default quizSlice.reducer;
