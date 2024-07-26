import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"

export const getLectures = createAsyncThunk('lectures/fetchLectures', async () => {
  const response = await axios.get('http://43.202.1.52:8080/api/v1/curricula');
  console.log(response)
  return response.data;
});


const lecturesSlice = createSlice({
  name: 'lectureslist',
  initialState: {
    lectures: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLectures.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getLectures.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lectures = action.payload;
      })
      .addCase(getLectures.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default lecturesSlice.reducer;