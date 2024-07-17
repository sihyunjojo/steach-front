import axios from "axios";
import { Lecture } from './store/lecturesSlice';

export const fetchTeachers = async (): Promise<Lecture[]> => {
    const response = await axios.get('http://localhost:5000/teachers');
    return response.data;
};