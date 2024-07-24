import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음
export interface Lecture {
  id: number;
  sub_title: string;
  intro: string;
  target: string;
  requirement: string;
  information: string;
  sub_category: string;
  weekdays: string;
  start_date: string;
  end_date: string;
  lecture_start_time: string;
  lecture_end_time: string;
}

export interface LecturesState {
  lectures: Lecture[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LecturesState = {
  lectures: [],
  status: "idle",
  error: null,
};

// Thunks

export const fetchLectures = createAsyncThunk<Lecture[]>(
  "lectures/fetchLectures",
  async () => {
    const response = await axios.get("http://localhost:3000/students");
    return response.data;
  }
);

export const addLectures = createAsyncThunk<Lecture, Omit<Lecture, "id">>(
  "lectures/addLecture",
  async (newLecture) => {
    const formData = new FormData();
    formData.append("sub_title", newLecture.sub_title);
    formData.append("intro", newLecture.intro);
    formData.append("target", newLecture.target);
    formData.append("requirement", newLecture.requirement);
    formData.append("information", newLecture.information);
    formData.append("sub_category", newLecture.sub_category);
    formData.append("weekdays", newLecture.weekdays);
    formData.append("start_date", newLecture.start_date);
    formData.append("end_date", newLecture.end_date);
    formData.append("lecture_start_time", newLecture.lecture_start_time);
    formData.append("lecture_end_time", newLecture.lecture_end_time);
    const response = await axios.post(
      "http://localhost:3000/students",
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

const lecturesSlice = createSlice<LecturesState, {}, "lectures">({
  name: "lectures",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLectures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        fetchLectures.fulfilled,
        (state, action: PayloadAction<Lecture[]>) => {
          state.status = "succeeded";
          state.lectures = action.payload;
        }
      )
      .addCase(fetchLectures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch lectures";
      });
    // peding : 로딩중
    // fulfilled : 비동기 작업이 완료된 시점
    // rejected : 비동기 작업이 실패한 시점
    builder
      .addCase(addLectures.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        addLectures.fulfilled,
        (state, action: PayloadAction<Lecture>) => {
          state.status = "succeeded";
          state.lectures.push(action.payload);
        }
      )
      .addCase(addLectures.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "ERROR!";
      });
    // .addCase(addLectures.pending, (state) => {
    //   state.status = 'loading';
    // })
  },
});

export default lecturesSlice.reducer;
