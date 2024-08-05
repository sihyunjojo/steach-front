import axios from 'axios';

const BASE_URL = 'https://steach.ssafy.io:8080';

// Fetch lecture details
export const fetchLectureDetails = async (lectureId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/lectures/${lectureId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update lecture
export const updateLecture = async (lectureId: number, lectureData: { lecture_title: string }) => {
    try {
        const response = await axios.patch(`${BASE_URL}/api/v1/lectures/${lectureId}`, lectureData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Start lecture
export const startLecture = async (lectureId: number) => {
    try {
        const response = await axios.patch(`${BASE_URL}/api/v1/lectures/start/${lectureId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch final lecture details
export const fetchFinalLectureDetails = async (lectureId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/lectures/final/${lectureId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Check if student attended the lecture
export const checkLectureAttendance = async (lectureId: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/lectures/check/${lectureId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
