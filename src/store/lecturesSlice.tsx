import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import axios from "axios";

// 이진송
// axios 구성 기본틀인데 서버통신 가능할때 시험해보고 적용할 것 같음
function aa () {
  const a = useSelector((state: Rootstate) => state) 
  console.log(a)
}

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
    weekdays_bitmask: string;
    // 최대 수강 정원
    max_attendees: number;
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
const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxdyIsImlhdCI6MTcyMjE2NjkyMiwiZXhwIjoxNzIyMTc4OTIyLCJ0b2tlbl90eXBlIjoiYWNjZXNzIn0.HbuhTjuzEkTl5g2D0QnRdElN8eEHQccKQBllVGJoHdw"

export const SignUpLecture = createAsyncThunk<Lecture, Lecture>(
  "lecture/signup",
  async (newLectureData) => {
    const formData = new FormData();
    formData.append('userName', newLectureData.title);
    formData.append('file', newLectureData.banner_img_url);
    console.log(formData)
    const imgPost = await axios.post(`http://steach.ssafy.io:8082/img-upload/upload`, formData ,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(imgPost.data, '1')
    return imgPost.data
    
    const response = await axios.post("http://43.202.1.52:8080/api/v1/curricula", {
      title: newLectureData.title,
      sub_title : newLectureData.sub_title,
      intro : newLectureData.intro,
      information: newLectureData.information,
      category: newLectureData.category,
      sub_category : newLectureData.sub_category,
      banner_img_url : newLectureData.banner_img_url,
      start_date : newLectureData.start_date,
      end_date : newLectureData.end_date,
      lecture_start_time : newLectureData.lecture_start_time,
      lecture_end_time: newLectureData.lecture_end_time,
      weekdays_bitmask: newLectureData.weekdays_bitmask,
      max_attendees: newLectureData.max_attendees,

    }, {
      headers : {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  } 
);



const lecturesSlice = createSlice({
  name: "lectures",
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
      });
    // peding : 로딩중
    // fulfilled : 비동기 작업이 완료된 시점
    // rejected : 비동기 작업이 실패한 시점
  },
});

export default lecturesSlice.reducer;
