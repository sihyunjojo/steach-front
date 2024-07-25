import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// 이진송
export interface Teacher {
  username: string;
  password: string;
  name: string;
  email: string;
  file?: File;
}

export interface TeacherLoginState {
  auth: Teacher | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TeacherLoginState = {
  auth: null,
  status: "idle",
  error: null,
};

// Thunks

export const SignUpTeacher = createAsyncThunk<Teacher, Teacher>(
  "teacher/signup",
  async (newUserData) => {
    const formData = new FormData();
    formData.append('teacherSignUpDto', JSON.stringify({
      username: newUserData.username,
      password: newUserData.password,
      name: newUserData.name,
      email: newUserData.email
    }));
    // formData.append("email", newUserData.email);
    if (newUserData.file) {
      formData.append("file", newUserData.file);
    }
      // FormData에 잘 추가되었는지 확인
    const response = await axios.post("http://43.202.1.52:8080/api/v1/teacher/join", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log(response.data)
    return response.data;
  }
);

const teacherSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUpTeacher.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        SignUpTeacher.fulfilled,
        (state, action: PayloadAction<Teacher>) => {
          state.status = "succeeded";
          console.log(state, action)
        }
      )
      .addCase(SignUpTeacher.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      });
  },
});

export default teacherSlice.reducer;
