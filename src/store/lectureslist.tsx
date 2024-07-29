import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"

export interface Lecture {
  // 제목
  title: string;
  // 부제목
  sub_title : string;
  // 강의 소개
  intro : string;
  // 강의 상세 설명
  information: string;
  // 강의 대분류
  category: string;
  // 강의 중분류
  sub_category : string;
  // 배너 이미지
  banner_img_url : File | null;
  // 강의 시작일
  start_date : string;
  // 강의 종료일
  end_date : string;
  // 강의 시작 시간
  lecture_start_time : string;
  // 강의 종료 시간
  lecture_end_time: string;
  // 수업 요일
  weekdays_bitmask: number;
  // 최대 수강 정원
  max_attendees: number;
}

interface LectureState {
  lecturesList: Lecture[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface CurriculaResponse {
  current_page_number: number;
  total_page: number;
  page_size: number;
  curricula: Lecture[];
}

const initialState: LectureState = {
  lecturesList: [],
  status: 'idle',
  error: null
};

export const getLectures = createAsyncThunk<CurriculaResponse>('lectures/fetchLectures', async () => {
  // 고정값이라 하드코딩 했음
  const pageSize = 16
  const currentPageNumber = 1
  const response = await axios.get<CurriculaResponse>(`http://43.202.1.52:8080/api/v1/curricula?pageSize=${pageSize}&currentPageNumber=${currentPageNumber}`);
  // console.log(response)
  return response.data;
});


const lecturesList = createSlice({
  name: 'lecturesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLectures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLectures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(state.status)
        console.log(action)
        // state.lectures = action.payload;
      })
      .addCase(getLectures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      })
      // 디테일
      .addCase(getLectures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLectures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log(state.status)
        console.log(action)
        // state.lectures = action.payload;
      })
      .addCase(getLectures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  }
});

export default lecturesList.reducer;