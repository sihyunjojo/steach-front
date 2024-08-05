import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'https://api.example.com',
//     headers: {'Authorization': `Bearer ${token}`}
//   });

const BASE_URL = 'http://steach.ssafy.io:8080';
// Fetch curricula list
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJxd2UiLCJpYXQiOjE3MjE5MjMzMDYsImV4cCI6MTcyMTkzNTMwNiwidG9rZW5fdHlwZSI6ImFjY2VzcyJ9.CW2qv9swCuxH2mBsuKeIAtOyP0cyCL0xU3hqbIY_1LU';

export const fetchPopularCurricula = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
            headers: {
                'Authorization': `Bearer ${JWT_TOKEN}`
            },
            params: {
                order: 'POPULAR',
            },
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const fetchPopularCurriculaAvailable = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
            params: {
                order: 'POPULAR',
                only_available: true,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchCurriculaByCategory = async (params: {
    curriculum_category?: string;
    order?: string;
    only_available?: boolean;
}) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
            params: {
                curriculum_category: params.curriculum_category,
                order: params.order,
                only_available: params.only_available,            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchCurriculaByCategoryByPopular = async (params: {
    curriculum_category?: string;
    only_available?: boolean;
}) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
            params: {
                curriculum_category: params.curriculum_category,
                order: POPULAR,
                only_available: params.only_available,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchCurriculaByCategoryAvailableByPopular = async (params: {
    curriculum_category?: string;
}) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
            params: {
                curriculum_category: params.curriculum_category,
                order: POPULAR,
                only_available: true,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

