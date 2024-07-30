import { createAsyncThunk } from "@reduxjs/toolkit";
import { Curricula } from "../../interface/Curriculainterface";
import axios from "axios";

const BASE_URL = "http://steach.ssafy.io:8080";
const IMG_SERVER_URL = "http://steach.ssafy.io:8082";

const Auth = localStorage.getItem("auth");
const AuthData = Auth ? JSON.parse(Auth) : "";

// img server API

// Fetch curricula list
export const fetchCurricula = async (params: {
  curriculum_category?: string;
  order?: string;
  only_available?: boolean;
  search?: string;
}) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
      params: {
        curriculum_category: params.curriculum_category,
        order: params.order,
        only_available: params.only_available,
        search: params.search,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 커리큘럼 만들기
export const SignUpLecture = createAsyncThunk<Curricula, Curricula>(
  "Curricula/signup",
  async (newLectureData) => {
    const formData = new FormData();
    formData.append("userName", AuthData.username);
    formData.append("file", newLectureData.banner_img_url);
    const imgPost = await axios.post(
      `${IMG_SERVER_URL}/img-upload/upload`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const response = await axios.post(
      `${BASE_URL}/api/v1/curricula`,
      {
        title: newLectureData.title,
        sub_title: newLectureData.sub_title,
        intro: newLectureData.intro,
        information: newLectureData.information,
        category: newLectureData.category,
        sub_category: newLectureData.sub_category,
        banner_img_url: imgPost.data.url,
        start_date: newLectureData.start_date,
        end_date: newLectureData.end_date,
        lecture_start_time: newLectureData.lecture_start_time,
        lecture_end_time: newLectureData.lecture_end_time,
        weekdays_bitmask: newLectureData.weekdays_bitmask,
        max_attendees: newLectureData.max_attendees,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${AuthData.token}`,
        },
      }
    );
    return response.data;
  }
);

// Apply to a curriculum
export const applyToCurriculum = async (curricula_id: number) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/curricula/${curricula_id}/apply`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch curriculum details
export const fetchCurriculumDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/curricula/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch lectures under a curriculum
export const fetchCurriculumLectures = async (curriculum_id: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/curricula/${curriculum_id}/lectures`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// 학생이 수강하는 커리큘럼 조회
export const getStudentCurriculaList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/students/curricula`, {
      headers: {
        Authorization: `Bearer ${AuthData.token}`,
      },
      params: {
        pageSize: 10,
        currentPageNumber: 1,
      },
    });

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
