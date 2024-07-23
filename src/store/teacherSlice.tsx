import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// 이진송
// 수정이 필요한 axios 틀 짜둔거임 위에꺼가 더 정확할듯
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
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: LecturesState = {
  lectures: [],
  status: 'idle',
  error: null,
};

// Thunks
export const fetchLectures = createAsyncThunk('lectures/fetchLectures', async () => {
  const response = await axios.get('http://localhost:5000/lectures');
  return response.data;
});

const lecturesSlice = createSlice({
  name: 'lectures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLectures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLectures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lectures = action.payload;
      })
      .addCase(fetchLectures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch lectures';
      });
  },
});

export default lecturesSlice.reducer;
