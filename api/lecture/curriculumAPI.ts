import axios from 'axios';

const BASE_URL = 'https://steach.ssafy.io:8080';

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

// Create new curriculum
export const createCurriculum = async (curriculumData: {
    title: string;
    sub_title: string;
    intro: string;
    information: string;
    category: string;
    sub_category: string;
    banner_img_url: string;
    start_date: string;
    end_date: string;
    weekdays_bitmask: string;
    lecture_start_time: string;
    lecture_end_time: string;
    max_attendees: number;
}) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/curricula`, curriculumData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Apply to a curriculum
export const applyToCurriculum = async (curricula_id: number) => {
    try {
        const response = await axios.post(`${BASE_URL}/api/v1/curricula/${curricula_id}/apply`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch curriculum details
export const fetchCurriculumDetails = async (id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula/${id}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Fetch lectures under a curriculum
export const fetchCurriculumLectures = async (curriculum_id: number) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula/${curriculum_id}/lectures`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
