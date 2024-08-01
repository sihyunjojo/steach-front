import axios from "axios";

// const instance = axios.create({
//     baseURL: 'https://api.example.com',
//     headers: {'Authorization': `Bearer ${token}`}
//   });

// const BASE_URL = "http://steach.ssafy.io:8080";
const BASE_URL = "http://192.168.100.208:8080";
// Fetch curricula list
export const fetchLatestCurricula = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
      params: {
        order: "POPULAR_PER_RATIO",
        only_available: true,
        pageSize: 7,
        currentPageNumber: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchPopularCurricula = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/v1/curricula`, {
      params: {
        order: "LATEST",
        only_available: true,
        pageSize: 7,
        currentPageNumber: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
