import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "axios";
import { useState } from "react";
import { fetchCurriculumDetails, fetchCurriculumLectures } from "../api/lecture/curriculumAPI"

// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음
const zz = localStorage.getItem("auth")
const Jzz = JSON.parse(zz)
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
  banner_img_url : string | File;
  // 강의 시작일
  start_date : string;
  // 강의 종료일
  end_date : string;
  // 강의 시작 시간
  lecture_start_time : string;
  // 강의 종료 시간
  lecture_end_time: string;
  // 수업 요일
  weekdays_bitmask: string;
  // 최대 수강 정원
  max_attendees: number;
  
  teacher_name: string;

  current_attendees: string;
}

export interface Lectures {
  lecture_id: number,
  lecture_title: string,
  lecture_order: number,
  lecture_start_time: string
}

export interface LecturesState {
  lectures: Lecture[];
  lectureslist: Lectures;
  selectlectures: Lecture | null
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: LecturesState = {
  lectures: [],
  lectureslist: "",
  selectlectures: null,
  status: "idle",
  error: null,
};

// Thunks
export const SignUpLecture = createAsyncThunk<Lecture, Lecture>(
  "lecture/signup",
  async (newLectureData) => {
    const formData = new FormData();
    formData.append('userName', Jzz.username);
    formData.append('file', newLectureData.banner_img_url);
    const imgPost = await axios.post(`http://steach.ssafy.io:8082/img-upload/upload`, formData ,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(imgPost.data.url, '1')
    
    const response = await axios.post("http://43.202.1.52:8080/api/v1/curricula", {
      title: newLectureData.title,
      sub_title : newLectureData.sub_title,
      intro : newLectureData.intro,
      information: newLectureData.information,
      category: newLectureData.category,
      sub_category : newLectureData.sub_category,
      banner_img_url : imgPost.data.url,
      start_date : newLectureData.start_date,
      end_date : newLectureData.end_date,
      lecture_start_time : newLectureData.lecture_start_time,
      lecture_end_time: newLectureData.lecture_end_time,
      weekdays_bitmask: newLectureData.weekdays_bitmask,
      max_attendees: newLectureData.max_attendees,

    }, {
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Jzz.token}`
      }
    })
    return response.data
  } 
);

export const getLectureDetails = createAsyncThunk<Lecture, string>(
  "lectures/detail",
  async (id) => {
    const data = await fetchCurriculumDetails(id);
    return data
  }
)

export const getLecturelist = createAsyncThunk<Lectures, string>(
  "lectures/list",
  async (id) => {
    const data = await fetchCurriculumLectures(id);
    console.log(data)
    return data
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
        (state, action: PayloadAction<Lecture>) => {
          state.status = "succeeded";
          state.lectures.push(action.payload);
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
        getLecturelist.fulfilled, (state, action) => {
          state.status = "succeeded";
          state.lectureslist = action.payload
          console.log(action.payload)
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
