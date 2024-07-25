import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import login from "../api/loginApi";

// 학생 회원가입 폼 형식
interface studentFormData {
  userId: string;
  password: string;
  name: string;
  email: string;
  auth_code: string;
}

// 학생 로그인 폼
interface studentLoginForm {
  username: string;
  password: string;
}

// 학생 로그인 반환 폼
interface studentLoginReturnForm {
  username: string;
  name: string;
  email: string;
  token: string;
  role: string;
}

// 유저 상태 형식
export interface UserState {
  role: string;
  token: string;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  username: string;
}

// 초기 상태
export const initialState: UserState = {
  role: "",
  token: "",
  status: "idle",
  error: null,
  username: "",
};

// createAsyncThunk 첫번째 인수 Returned - 비동기 작업이 성공적으로 완료된 후 반환되는 값의 타입
// 두번째 인수 ThunkArg - 비동기 작업을 시작할 때 액션 생성 함수에 전달되는 인수의 타입.
// 회원 가입
export const signUpStudent = createAsyncThunk<UserState, studentFormData>(
  "signUpStudent",
  async (userFormData, thunkAPI) => {
    try {
      const formDataToSend = {
        username: userFormData.userId,
        password: userFormData.password,
        name: userFormData.name,
        email: userFormData.email,
        auth_code: userFormData.auth_code,
      };

      const response = await axios.post(
        "http://43.202.1.52:8080/api/v1/student/join",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 학생 로그인
export const loginStudent = createAsyncThunk<
  studentLoginReturnForm,
  studentLoginForm
>("loginStudent", async (loginFormData, thunkAPI) => {
  try {
    const formDataToSend = {
      username: loginFormData.username,
      password: loginFormData.password,
    };

    const response = await axios.post(
      "http://43.202.1.52:8080/api/v1/login",
      formDataToSend,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(error);
  }
});

const studentSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.role = "";
      state.status = "idle";
      state.token = "";
      state.username = "";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpStudent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpStudent.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signUpStudent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action);
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.username = action.payload.username;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const studentAuthActions = studentSlice.actions;

export default studentSlice.reducer;
