import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { teacherInfoGet } from "../../api/user/userAPI";
import { teacherInfoUpdate } from "../../api/user/userAPI";
import { TeacherInfoUpdateForm } from "../../components/teacher/teacherMyInfo/TeacherMyInfoUpdateForm";
import { StudentInfoUpdateForm } from "../../components/student/studentMyInfo/StudentMyInfoUpdateForm";
import { studentInfoGet } from "../../api/user/userAPI";
import { studentInfoUpdate } from "../../api/user/userAPI";
import {
  returnStudentCurriculaList,
  Curricula,
} from "../../interface/Curriculainterface";
import { getStudentCurriculaList } from "../../api/lecture/curriculumAPI";

// 학생 정보 형식
export interface studentInfo {
  username: string;
  nickname: string;
  email: string;
}

// 선생님 정보 형식
export interface teacherInfo {
  username: string | null;
  nickname: string;
  email: string;
  volunteer_time: number;
  brief_introduction: string | null;
  academic_background: string | null;
  specialization: string | null;
}

// 유저의 기본 정보 형식 - 학생과 선생님의 정보를 한번에 상태에 저장하기 위함.
export interface UserInfo {
  status: string;
  error: string | null;
  student: studentInfo | null;
  teacher: teacherInfo | null;
  curricula: Curricula[];
}

// 초기 상태
const initialState: UserInfo = {
  status: "",
  error: null,
  student: null,
  teacher: null,
  curricula: [],
};

// 선생님 내정보 조회
export const teacherInfo = createAsyncThunk<teacherInfo>(
  "teacher/get",
  async (_, thunkAPI) => {
    try {
      const response = await teacherInfoGet();

      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 선생님 내정보 수정
export const teacherInfoPatch = createAsyncThunk<
  teacherInfo,
  TeacherInfoUpdateForm
>("teacher/patch", async (updateFormData, thunkAPI) => {
  try {
    const response = await teacherInfoUpdate(updateFormData);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(error);
  }
});

// 학생 정보 조회
export const studentInfo = createAsyncThunk<studentInfo>(
  "student/get",
  async (_, thunkAPI) => {
    try {
      const response = await studentInfoGet();

      return response;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 학생 정보 수정
export const studentInfoPatch = createAsyncThunk<
  studentInfo,
  StudentInfoUpdateForm
>("student/patch", async (updateFormData, thunkAPI) => {
  try {
    const response = await studentInfoUpdate(updateFormData);

    return response;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(error);
  }
});

// 학생이 수강신청한 강의 목록 가져오기
export const getStudentCurriculas =
  createAsyncThunk<returnStudentCurriculaList>(
    "student/curricula/get",
    async (_, thunkAPI) => {
      try {
        const response = await getStudentCurriculaList();

        return response;
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          return thunkAPI.rejectWithValue(error.response.data);
        }
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

// 프로필 슬라이스
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    reset: (state) => {
      state.status = "";
      state.teacher = null;
      state.student = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // 선생님 프로필 정보 get
      .addCase(teacherInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(teacherInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const teacherData: teacherInfo = {
          username: action.payload.username,
          nickname: action.payload.nickname,
          email: action.payload.email,
          volunteer_time: action.payload.volunteer_time,
          brief_introduction: action.payload.brief_introduction,
          academic_background: action.payload.academic_background,
          specialization: action.payload.specialization,
        };
        state.teacher = teacherData;
      })
      .addCase(teacherInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      // 학생 프로필 정보 get
      .addCase(studentInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(studentInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        const studentData: studentInfo = {
          username: action.payload.username,
          nickname: action.payload.nickname,
          email: action.payload.email,
        };
        state.student = studentData;
      })
      .addCase(studentInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      })
      // 학생 수강신청 커리큘럼 addCase
      .addCase(getStudentCurriculas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getStudentCurriculas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.curricula = action.payload.curricula;
      })
      .addCase(getStudentCurriculas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export const { reset } = profileSlice.actions;

export default profileSlice.reducer;
