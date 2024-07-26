import axios from 'axios';


export const getRadarChartResponse = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/statistics/radar-chart`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getGptResponse = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/statistics/gpt`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getLectureStatistics = async (lectureId) => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/statistics/lecture/${lectureId}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};