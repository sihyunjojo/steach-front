import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Lectures } from '../interface/Curriculainterface'
import { fetchCurriculumLectures } from "../api/lecture/curriculumAPI"
// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음

export interface LecturesState {
  lectureslist: Lectures[] ;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LecturesState = {
  lectureslist: [],
  status: "idle",
  error: null,
};


export const getLecturelist = createAsyncThunk<Lectures[], string>(
  "lectures/list",
  async (id) => {
    const data = await fetchCurriculumLectures(id);
    return data;
  }
)


const lecturesSlice = createSlice({
  name: "lecturesdetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 커리큘럼에 해당하는 강의
      .addCase(getLecturelist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getLecturelist.fulfilled, (state, action: PayloadAction<Lectures[]>) => {
          state.status = "succeeded";
          state.lectureslist = action.payload
        }
      )
      .addCase(getLecturelist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      });
  },
});

export default lecturesSlice.reducer;
