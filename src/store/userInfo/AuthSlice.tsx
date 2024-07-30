import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reset } from "./profileSlice";
import { deleteMember, login } from "../../api/user/userAPI";

// 학생 회원가입 폼 형식
interface studentFormData {
  username: string;
  password: string;
  nickname: string;
  email: string;
  auth_code: string;
}

// 선생님 회원가입 폼 형식
interface TeacherFormData {
  username: string;
  password: string;
  nickname: string;
  email: string;
  file?: File;
}

// 통합 로그인 폼
export interface LoginForm {
  username: string;
  password: string;
}

// 통합 로그인 반환 폼
export interface LoginReturnForm {
  username: string;
  nickname: string;
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
// 학생 회원가입
export const signUpStudent = createAsyncThunk<UserState, studentFormData>(
  "student/signup",
  async (userFormData, thunkAPI) => {
    try {
      const formDataToSend = {
        username: userFormData.username,
        password: userFormData.password,
        nickname: userFormData.nickname,
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

// 선생님 회원가입
export const signUpTeacher = createAsyncThunk<UserState, TeacherFormData>(
  "teacher/signup",
  async (newUserData) => {
    const formData = new FormData();
    formData.append(
      "teacherSignUpDto",
      JSON.stringify({
        username: newUserData.username,
        password: newUserData.password,
        nickname: newUserData.nickname,
        email: newUserData.email,
      })
    );
    if (newUserData.file) {
      formData.append("file", newUserData.file);
    }
    // FormData에 잘 추가되었는지 확인
    const response = await axios.post(
      "http://43.202.1.52:8080/api/v1/teacher/join",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
);

// 통합 로그인
export const loginSteach = createAsyncThunk<LoginReturnForm, LoginForm>(
  "login",
  async (loginFormData, thunkAPI) => {
    try {
      const formDataToSend: LoginForm = {
        username: loginFormData.username,
        password: loginFormData.password,
      };

      // 로그인 API 요청
      const response = await login(formDataToSend);

      // 로컬 스토리지에 정보 저장
      localStorage.setItem("auth", JSON.stringify(response));

      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 회원 탈퇴
export const deleteUserSteach = createAsyncThunk(
  "user/delete",
  async (_, thunkAPI) => {
    try {
      const response = await deleteMember();

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그아웃
export const logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  // 로컬 스토리지에서 사용자 정보 삭제
  localStorage.removeItem("auth");
  // 프로필 상태 초기화
  thunkAPI.dispatch(reset());
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 학생 관련 addCase
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
      // 선생님 관련 addCase
      .addCase(signUpTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signUpTeacher.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(signUpTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      // login 관련 addCase
      .addCase(loginSteach.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginSteach.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.role = action.payload.role;
        state.username = action.payload.username;
      })
      .addCase(loginSteach.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      // logout 관련 addCase
      .addCase(logout.fulfilled, (state) => {
        state.status = "idle";
        state.role = "";
        state.token = "";
        state.username = "";
      })
      // 회원탈퇴 관련 addCase
      .addCase(deleteUserSteach.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUserSteach.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(deleteUserSteach.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
