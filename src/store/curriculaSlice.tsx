import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Curricula, Lectures } from '../interface/Curriculainterface'
import { fetchCurriculumDetails, fetchCurriculumLectures } from "../api/lecture/curriculumAPI"
import { SignUpLecture } from '../api/lecture/curriculumAPI'
// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음

export interface LecturesState {
  curricula: Curricula[];
  lectureslist: { lectures: Lectures[] } | null;
  selectlectures: Curricula | null
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LecturesState = {
  curricula: [],
  lectureslist: null,
  selectlectures: null,
  status: "idle",
  error: null,
};


export const getLectureDetails = createAsyncThunk<Curricula, string>(
  "Curricula/detail",
  async (id) => {
    const data = await fetchCurriculumDetails(id);
    return data
  }
)

export const getLecturelist = createAsyncThunk<{lectures: Lectures[]}, string>(
  "lectures/list",
  async (id) => {
    const data = await fetchCurriculumLectures(id);
    return { lectures: data };
  }
)


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
      .addCase(getLectureDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getLectureDetails.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.selectlectures = action.payload;
        }
      )
      .addCase(getLectureDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      })
      // 커리큘럼에 해당하는 강의
      .addCase(getLecturelist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getLecturelist.fulfilled, (state, action: PayloadAction<{ lectures: Lectures[] }>) => {
          state.status = "succeeded";
          state.lectureslist = action.payload
        }
      )
      .addCase(getLecturelist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      });
    // peding : 로딩중
    // fulfilled : 비동기 작업이 완료된 시점
    // rejected : 비동기 작업이 실패한 시점
  },
});

export default lecturesSlice.reducer;
