import axios from "axios";

// const BASE_URL = 'http://steach.ssafy.io:8080';
const BASE_URL = "http://192.168.100.208:8080";

export const getRadarChartResponse = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/statistics/radar-chart`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getGptResponse = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/statistics/gpt`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getLectureStatistics = async (lectureId: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/statistics/lecture/${lectureId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
