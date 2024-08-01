import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Curricula, LectureSeries } from "../interface/Curriculainterface";
import {
  fetchCurriculumDetails,
  fetchCurriculumLectures,
  applyToCurriculum,
  getCurriculimApply,
} from "../api/lecture/curriculumAPI";
import { SignUpLecture } from "../api/lecture/curriculumAPI";

// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음
export interface LecturesState {
  curricula: Curricula[];
  lectureslist: LectureSeries | null;
  selectlectures: Curricula | null;
  isApply:  boolean ;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LecturesState = {
  curricula: [],
  lectureslist: null,
  selectlectures: null,
  isApply: false ,
  status: "idle",
  error: null,
};

export const getCurriculaDetail = createAsyncThunk<Curricula, string>(
  "curricula/detail",
  async (id) => {
    const data = await fetchCurriculumDetails(id);
    return data;
  }
);

export const getCurriculaLectureList = createAsyncThunk<LectureSeries, string>(
  "lectures/list",
  async (id) => {
    const data = await fetchCurriculumLectures(id);
    return data;
  }
);


export const applyCurricula = createAsyncThunk<string, string>(
  "curricula/apply",
  async (id) => {
    const data = await applyToCurriculum(id);
    return data;
  }
);


export const applyCurriculaCheck = createAsyncThunk<boolean, string>(
  "curricula/applyCheck",
  async (id) => {
    const data = await getCurriculimApply(id);
    return data;
  }
);


export const CurriculaCancel = createAsyncThunk<boolean, string>(
  "curricula/cancel",
  async (id) => {
    const data = await getCurriculimApply(id);
    return data;
  }
);



const lecturesSlice = createSlice({
  name: "lecturesdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(SignUpLecture.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        SignUpLecture.fulfilled,
        (state, action: PayloadAction<Curricula>) => {
          state.status = "succeeded";
          state.curricula.push(action.payload);
        }
      )
      .addCase(SignUpLecture.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // 디테일 강의 가져오기
      .addCase(getCurriculaDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCurriculaDetail.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectlectures = action.payload;
      })
      .addCase(getCurriculaDetail.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // 커리큘럼에 해당하는 강의
      .addCase(getCurriculaLectureList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getCurriculaLectureList.fulfilled,
        (state, action: PayloadAction<LectureSeries>) => {
          state.status = "succeeded";
          state.lectureslist = action.payload;
        }
      )
      .addCase(getCurriculaLectureList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // [학생] 커리큘럼 수강신청
      .addCase(applyCurricula.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        applyCurricula.fulfilled,
        (state) => {
          state.status = "succeeded";
        }
      )
      .addCase(applyCurricula.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // [학생] 커리큘럼 수강신청 여부 체크
      .addCase(applyCurriculaCheck.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        applyCurriculaCheck.fulfilled,
        (state, action:PayloadAction<boolean>) => {
          state.status = "succeeded";
          state.isApply = action.payload
        }
      )
      .addCase(applyCurriculaCheck.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // [학생] 커리큘럼 수강신청 취소
      .addCase(CurriculaCancel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        CurriculaCancel.fulfilled,
        (state, action:PayloadAction<boolean>) => {
          state.status = "succeeded";
          state.isApply = action.payload
        }
      )
      .addCase(CurriculaCancel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      });
  },
});

export default lecturesSlice.reducer;
