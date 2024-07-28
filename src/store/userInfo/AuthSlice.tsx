import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 학생 회원가입 폼 형식
interface studentFormData {
  username: string;
  password: string;
  name: string;
  email: string;
  auth_code: string;
}

// 선생님 회원가입 폼 형식
interface TeacherFormData {
  username: string;
  password: string;
  name: string;
  email: string;
  file?: File;
}

// 통합 로그인 폼
interface LoginForm {
  username: string;
  password: string;
}

// 통합 로그인 반환 폼
interface LoginReturnForm {
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
// 학생 회원가입
export const signUpStudent = createAsyncThunk<UserState, studentFormData>(
  "student/signup",
  async (userFormData, thunkAPI) => {
    try {
      const formDataToSend = {
        username: userFormData.username,
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
        name: newUserData.name,
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

      const response = await axios.post(
        "http://43.202.1.52:8080/api/v1/login",
        formDataToSend,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data: LoginReturnForm = {
        username: response.data.username,
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
        role: response.data.role,
      };
      localStorage.setItem("auth", JSON.stringify(data));
      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    // 로컬 스토리지에서 사용자 정보 삭제
    localStorage.removeItem('auth');
    return {};
  }
);

export const checkLoginStatus = createAsyncThunk(
  'user/checkLoginStatus',
  async (_, { getState, rejectWithValue }) => {
    try {
      const localStorageData = localStorage.getItem('auth');
      if (!localStorageData) {
        return rejectWithValue('No user data in local storage');
      }
      const userData = JSON.parse(localStorageData);
      return userData; // 로컬 스토리지에서 불러온 사용자 데이터를 반환
    } catch (error) {
      return rejectWithValue('Failed to parse user data');
    }
  }
);

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
      .addCase(logout.fulfilled, (state, action) => {
        state.role = '';
        state.token = '';
        state.username = '';
        state.status = 'idle';
      })
      // login 상태 확인 addCase
      .addCase(checkLoginStatus.fulfilled, (state, action) => {
        state.role = action.payload.role;
        state.token = action.payload.token;
        state.username = action.payload.username;
        state.status = 'succeeded';
      })
      .addCase(checkLoginStatus.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
