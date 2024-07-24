import {
  createSlice,
  createAsyncThunk,
  configureStore,
} from "@reduxjs/toolkit";
import axios from "axios";

// 유저 폼 데이터 형식
interface UserFormData {
  userId: string;
  password: string;
  name: string;
  email: string;
  authCode: string;
}

// 인증 및 토큰 형식
interface AuthState {
  isAuthenticated: boolean;
  token: string;
}

// 유저 상태 형식
export interface UserState {
  auth: AuthState | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// 초기 상태
export const initialState: UserState = {
  auth: null,
  status: "idle",
  error: null,
};

// createAsyncThunk 첫번째 인수 Returned - 비동기 작업이 성공적으로 완료된 후 반환되는 값의 타입
// 두번째 인수 ThunkArg - 비동기 작업을 시작할 때 액션 생성 함수에 전달되는 인수의 타입.
// 회원 가입
export const signUpUser = createAsyncThunk<AuthState, UserFormData>(
  "AuthSlice/signUp",
  async (userFormData, thunkAPI) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("username", userFormData.userId);
      formDataToSend.append("password", userFormData.password);
      formDataToSend.append("name", userFormData.name);
      formDataToSend.append("email", userFormData.email);
      formDataToSend.append("auth_code", userFormData.authCode);

      const response = await axios.post(
        "http://43.202.1.52:8080/api/v1/student/join",
        formDataToSend
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );

      const token = response.data.token;

      const data: AuthState = {
        isAuthenticated: true,
        token: token,
      };

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.auth = action.payload;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default userSlice.reducer;
